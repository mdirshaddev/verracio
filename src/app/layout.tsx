import 'src/app/globals.css';
import 'src/app/mdx.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import Script from 'next/script';

import { RootProvider } from 'src/app/root-provider';
import { WebVitals } from 'src/app/web-vitals';

import { fontSans } from 'shared-lib/fonts';

import { SiteFooter, SiteHeader } from 'src/components/layouts';

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
      </body>
    </html>
  );
}
