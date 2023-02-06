import { Partytown } from "@builder.io/partytown/react";
import Analytics from "@/components/Analytics";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <Partytown debug forward={["dataLayer.push"]} />
        <Analytics />
      </head>

      <body>
        root
        <br />
        {children}
      </body>
    </html>
  );
}
