import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Program Kampung Inggris LC",
  description: "Kursus Bahasa Inggris Terfavorit di Kampung Inggris",
  verification: {
    google: "twVlJo9pXVv3uqBNwTDAY9Zn6o-zvL3U-npaG5mLeAA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HMS8J1N0MY"
        />
        <Script async id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-HMS8J1N0MY');
        `}
        </Script>
        <Script async id="tiktok-pixel">
          {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
          
            ttq.load('C36MVV3521OGTSUK8B5G');
            ttq.page();
          }(window, document, 'ttq');
        `}
        </Script>
        <Script async id="meta-pixel">
          {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;
            n=f.fbq=function(){
              n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);
              t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }
          (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1881998885434766');
          fbq('track', 'PageView');
          `}
        </Script>
        <Script async id="microsoft-clarity">
          {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "lctya7ukcs")
          `}
        </Script>
      </Suspense>
      <body className={inter.className}>
        <div className="flex flex-col justify-between h-screen">{children}</div>
      </body>
    </html>
  );
}
