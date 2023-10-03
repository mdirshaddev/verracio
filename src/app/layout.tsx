import 'src/app/globals.css';
import 'src/app/mdx.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import type { Metadata } from 'next';
import Script from 'next/script';

import { RootProvider } from 'src/app/root-provider';
import { WebVitals } from 'src/app/web-vitals';

import { fontSans } from 'shared-lib/fonts';

import { SiteFooter, SiteHeader } from 'src/components/layouts';

export const metadata: Metadata = {
  title: 'Md Irshad - 🐋 Software Developer',
  description: 'Building things for better future',
  colorScheme: 'dark',
  category: 'Personal Website',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: ['/favicon-16x16.png', '/favicon-32x32.png'],
    apple: '/apple-touch-icon.png'
  },
  manifest: '/manifest.webmanifest'
};

export default function RootLayout(props: React.PropsWithChildren) {
  const { children } = props;
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={fontSans.className}>
        <WebVitals />
        <RootProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <SiteHeader />
          {children}
          <SiteFooter />
        </RootProvider>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
        <Script
          type='text/javascript'
          strategy='afterInteractive'
          id='behaviour-analytics'>
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "j49vm8rfs7");`}
        </Script>
      </body>
    </html>
  );
}
