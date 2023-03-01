'use client';

// import { Partytown } from '@builder.io/partytown/react';
// import Analytics from '@/components/Analytics';

import { GoogleAnalytics } from 'nextjs-google-analytics';

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  console.info('XAIOXJOAJXAJIOX', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);

  return (
    <html lang="en">
      <head>
        {/* <Partytown debug forward={['dataLayer.push']} />
        <Analytics /> */}
      </head>

      <GoogleAnalytics trackPageViews strategy="lazyOnload" />
      <body>{children}</body>
    </html>
  );
}
