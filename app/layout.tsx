import "./globals.css";

import { Inter } from "next/font/google";
import { MainNav } from "@/components/layouts/MainNav";
import type { Metadata } from "next";
import { PHProvider } from "@/components/posthog";
import { Providers } from "@/components/providers";
import Script from "next/script";
import SessionPRO from "@/components/SessionPRO";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const OpenReplayNoSSR = dynamic(() => import("@/components/open-replay"), {
  ssr: false,
});

const PostHogPageView = dynamic(() => import("@/components/page-views"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://umami.kafka-api.site/script.js"
        data-website-id="8d1ecdf0-659e-41c1-9bf2-ffdf16d701c5"
      />
      <Script
        async
        defer
        src="https://tianji.kafka-api.site/tracker.js"
        data-website-id="cm2pbb7cp0001107yj49wv2qa"
      />
      <PHProvider>
        <body className={inter.className}>
          <SessionPRO>
            <Providers>
              <PostHogPageView />
              {children}
            </Providers>
          </SessionPRO>
          <OpenReplayNoSSR />
          <Script type="text/javascript" id="lol">
            {`(function(w,d,n,u,o,t,m){w['SrecObject']=o;w[o]=w[o]||function(){
    (w[o].q=w[o].q||[]).push(arguments)},w[o].l=1*new Date();t=d.createElement(n),
    m=d.getElementsByTagName(n)[0];t.async=1;t.src=u;m.parentNode.insertBefore(t,m)
    })(window,document,'script','https://uxlens.akera.me/collect/initialize.js','srec');
    srec('init', '94ead810-94a8-11ef-b237-9d211fa7dc12');`}
          </Script>
        </body>
      </PHProvider>
    </html>
  );
}
