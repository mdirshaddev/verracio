import {
  FirebaseApp,
  getApp,
  getApps,
  initializeApp,
  type FirebaseOptions
} from 'firebase/app';
import {
  getMessaging,
  getToken,
  onMessage,
  type MessagePayload
} from 'firebase/messaging';
import localforage from 'localforage';

import { toast } from 'shared-ui/use-toast';

/**
 * The `FirebaseService` class is responsible for initializing the Firebase app, handling message
listeners, and fetching the FCM token for push notifications.
 */
export class FirebaseService {
  private firebaseOptions: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  };

  public firebaseApp: FirebaseApp;

  public constructor() {
    this.firebaseApp = !getApps().length
      ? initializeApp(this.firebaseOptions)
      : getApp();
  }

  /**
   * The function `onMessageListener` returns a promise that resolves with a `MessagePayload` when a
   * message is received.
   * @returns a Promise that resolves to a MessagePayload.
   */
  public async onMessageListener(): Promise<MessagePayload> {
    return new Promise((resolve: (value: MessagePayload) => void) => {
      const messaging = getMessaging(this.firebaseApp);
      onMessage(messaging, payload => {
        resolve(payload);
      });
    });
  }

  public async getFCMToken() {
    if (!('Notification' in window)) {
      // Check if the browser supports notifications
      toast({
        variant: 'destructive',
        title: 'Notification API not supported',
        description: "Your browser doesn't support this API"
      });
    } else if (Notification.permission === 'granted') {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      this.fetchToken();
    } else if (Notification.permission !== 'denied') {
      // We need to ask the user for permission
      Notification.requestPermission()
        .then((permission: NotificationPermission) => {
          // If the user accepts, let's create a notification
          if (permission === 'granted') {
            this.fetchToken();
          }
        })
        .catch(err => {});
    }
  }

  private async fetchToken() {
    try {
      if ((await localforage.getItem('fcm_token')) !== null) {
        console.log('FCM token already exists');
        return false;
      }
      const messaging = getMessaging(this.firebaseApp);
      const currentToken = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY
      });
      if (currentToken) {
        localforage.setItem('fcm_token', currentToken);
        console.log('fcm_token', currentToken);
      } else {
        // Show permission request UI
        console.log(
          'NOTIFICACION, No registration token available. Request permission to generate one.'
        );
        toast({
          variant: 'destructive',
          title: 'No registration token available',
          description: 'Request permission to generate one.'
        });
      }
    } catch (err) {
      console.log('An error occurred while retrieving token. ', err);
    }
  }
}
