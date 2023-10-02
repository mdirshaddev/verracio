// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { init, Replay, showReportDialog } from '@sentry/nextjs';

init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: process.env.NODE_ENV !== 'production',

  beforeSend(event, hint) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      showReportDialog({ eventId: event.event_id });
    }
    return event;
  },

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    new Replay({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true
    })
  ]
});