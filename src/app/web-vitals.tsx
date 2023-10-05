'use client';

import { useReportWebVitals } from 'next/web-vitals';

interface window extends Window {
  gtag?: any;
}

declare const window: window;

/**
 * The `WebVitals` component is used to report web vitals metrics to Google Analytics, or log them to
 * the console if Google Analytics is not initialized.
 * @returns The code is returning `null`.
 */
export const WebVitals = () => {
  useReportWebVitals(metric => {
    // Use `window.gtag` if you initialized Google Analytics as this example:
    // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
    if (window?.gtag) {
      window?.gtag('event', metric.name, {
        value: Math.round(
          metric.name === 'CLS' ? metric.value * 1000 : metric.value
        ), // values must be integers
        event_label: metric.id, // id unique to current page load
        non_interaction: true // avoids affecting bounce rate.
      });
    } else {
      console.log(metric);
    }
  });

  return null;
};
