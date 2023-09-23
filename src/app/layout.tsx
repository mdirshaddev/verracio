// tailwindcss
import 'src/app/globals.css';

// next script
import Script from 'next/script';

// next font `sans`
import { fontSans } from 'shared-lib/fonts';

// root level provider
import { RootProvider } from 'src/app/root-provider';

export default function RootLayout(props: React.PropsWithChildren) {
  const { children } = props;
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={fontSans.className}>
        <RootProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </RootProvider>
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
