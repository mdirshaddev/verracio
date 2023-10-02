'use client';

import { useEffect, useRef } from 'react';

import { ApolloProvider } from '@apollo/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

import { Toaster } from 'shared-ui/toaster';
import { useToast } from 'shared-ui/use-toast';

import { nextGraphOSIntegratedApolloClient } from 'src/modules/apollo/client/apollo-graphql-client';

import { FirebaseService } from 'src/services/firebase/firebase.service';

type RootProviderProps = ThemeProviderProps;

interface window extends Window {
  workbox?: any;
}

declare const window: window;

/**
 * The `RootProvider` function is a wrapper component that provides the necessary context providers for
 * a TypeScript React application.
 * @param {RootProviderProps}  - - `children`: The child components that will be rendered inside the
 * `RootProvider`.
 * @returns The RootProvider component is returning a JSX element. The JSX element is wrapped in the
 * NextThemesProvider component and the ApolloProvider component. The children prop is passed as a
 * child of the ApolloProvider component.
 */
export function RootProvider({ children, ...props }: RootProviderProps) {
  const { toast } = useToast();
  const queryClientRef = useRef<QueryClient>(new QueryClient());

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production' &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;
      // add event listeners to handle any of PWA lifecycle event
      // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
      wb.addEventListener('installed', (event: any) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
        toast({
          title: 'Md Irshad - PWA Install Successfully',
          description: 'Your app is now cached for offline use.'
        });
      });

      wb.addEventListener('controlling', (event: any) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      wb.addEventListener('activated', (event: any) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
      // NOTE: MUST set skipWaiting to false in next.config.js pwa object
      // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
      const promptNewVersionAvailable = (event: any) => {
        // `event.wasWaitingBeforeRegister` will be false if this is the first time the updated service worker is waiting.
        // When `event.wasWaitingBeforeRegister` is true, a previously updated service worker is still waiting.
        // You may want to customize the UI prompt accordingly.
        if (
          confirm(
            'A newer version of this web app is available, reload to update?'
          )
        ) {
          wb.addEventListener('controlling', (event: any) => {
            window.location.reload();
          });

          // Send a message to the waiting service worker, instructing it to activate.
          wb.messageSkipWaiting();
        } else {
          console.log(
            'User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time.'
          );
        }
      };

      wb.addEventListener('waiting', promptNewVersionAvailable);

      // ISSUE - this is not working as expected, why?
      // I could only make message event listenser work when I manually add this listenser into sw.js file
      wb.addEventListener('message', (event: any) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      // never forget to call register as auto register is turned off in next.config.js
      wb.register();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // deepcode ignore InsufficientPostmessageValidation: here the NODE_ENV is taken care from node side
    if (process.env.NODE_ENV !== 'development') {
      const firebaseService = new FirebaseService();
      // TODO: Firebase cloud messaging
      firebaseService.getFCMToken();
      firebaseService
        .onMessageListener()
        .then(payload => {
          toast({
            title: payload.notification?.title,
            description: payload.notification?.body
          });
        })
        .catch(err => {
          // TODO: Sentry error logging
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NextThemesProvider {...props}>
      <ApolloProvider client={nextGraphOSIntegratedApolloClient}>
        <QueryClientProvider client={queryClientRef.current}>
          <Toaster />
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ApolloProvider>
    </NextThemesProvider>
  );
}
