import { Partytown } from "@builder.io/partytown/react";
import Script from "next/script";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Partytown debug forward={["dataLayer.push"]} />

      <Script
        id="ga_dataLayer2"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('event', 'screen_view', { 'app_name': 'Sara XD', 'screen_name': 'Home' });console.info('GTAG GONE!');",
        }}
      />

      <p>teste</p>
      {children}
    </>
  );
}
