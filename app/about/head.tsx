import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>About | Nextjs 13 Ga Partytown Experiment</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="About page demo" />
      <link rel="icon" href="/favicon.ico" />

      <Script
        id="ga_dataLayer2"
        type="text/partytown"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('event', 'screen_view', { 'app_name': 'Sara XD', 'screen_name': 'Home' });",
        }}
      />
    </>
  );
}
