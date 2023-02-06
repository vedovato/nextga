"use client";

import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     console.info("heehee");
  //     // @ts-ignore
  //     window.dataLayer.push({
  //       event: "page_view_xablau",
  //       page_title: "HEE HEE TESTE",
  //       page_location: window.location.href,
  //       page_path: window.location.pathname,
  //       send_to: "G-57JLVPDLMS",
  //     });

  //     // @ts-ignore
  //     window.dataLayer.push("event", "screen_view", {
  //       app_name: "myAppName",
  //       screen_name: "Home",
  //     });
  //   }
  // }, []);

  return (
    <main>
      <h1>About page</h1>
      <Link href="/">Voltar</Link>

      <Script
        id="ga_dataLayer2"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html:
            "gtag('event', 'screen_view', { 'app_name': 'myAppName', 'screen_name': 'Home' });",
        }}
      />
    </main>
  );
}
