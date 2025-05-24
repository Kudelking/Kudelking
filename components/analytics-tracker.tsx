"use client"

import { useEffect } from "react"
import Script from "next/script"

export function AnalyticsTracker() {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      if ("web-vital" in window) {
        // @ts-ignore
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === "navigation") {
              // Track page load time
              console.log("Page Load Time:", entry.loadEventEnd - entry.loadEventStart)
            }
          }
        }).observe({ entryTypes: ["navigation"] })
      }
    }

    trackWebVitals()
  }, [])

  return (
    <>
      {/* Google Analytics 4 */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>

      {/* Google Search Console */}
      <Script id="google-search-console" strategy="afterInteractive">
        {`
          (function() {
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=YOUR_SEARCH_ENGINE_ID';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
          })();
        `}
      </Script>
    </>
  )
}
