'use client';

import Link from 'next/link';
// import Script from 'next/script';

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
      {/* <Script
        async
        id="ga"
        src="https://www.googletagmanager.com/gtag/js?id=G-57JLVPDLMS"
        strategy="lazyOnload"
        type="text/partytown"
      /> */}

      {/* <Script
        id="ga_dataLayer3"
        type="text/partytown"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html:
            "function gtag(){dataLayer.push(arguments)}; console.info('GTAG GONE!');",
        }}
      /> */}

      <h1>About page</h1>
      <Link href="/">Voltar</Link>
    </main>
  );
}
