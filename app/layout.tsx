import { Partytown } from "@builder.io/partytown/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <Partytown debug={true} forward={["dataLayer.push"]} />

        <script
          src="https://www.googletagmanager.com/gtag/js?id=G-57JLVPDLMS"
          type="text/partytown"
        />

        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-57JLVPDLMS');",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
