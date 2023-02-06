"use client";

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
      <Script
        id="ga_dataLayer2"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('event', 'screen_view', { 'app_name': 'Sara XD', 'screen_name': 'Home' });console.info('GTAG GONE!');",
        }}
      />

      <h1>About page</h1>
      <Link href="/">Voltar</Link>
    </main>
  );
}
