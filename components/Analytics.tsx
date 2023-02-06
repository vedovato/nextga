import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script
        async
        id="ga"
        src="https://www.googletagmanager.com/gtag/js?id=G-57JLVPDLMS"
        strategy="worker"
        type="text/partytown"
      />

      <Script
        id="ga_dataLayer"
        type="text/partytown"
        strategy="worker"
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-57JLVPDLMS');",
        }}
      />
    </>
  );
}
