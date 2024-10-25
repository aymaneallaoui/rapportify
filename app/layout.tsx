import { Providers } from "@/components/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/layouts/MainNav";
import SessionPRO from "@/components/SessionPRO";
const inter = Inter({ subsets: ["latin"] });
import Script from 'next/script'

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
      <Script defer src="https://umami.kafka-api.site/script.js" data-website-id="b9be3800-e19b-4d99-bd34-55f85144d981"/>
      <body className={inter.className}>
        <SessionPRO>
          <Providers>{children}</Providers>
        </SessionPRO>
      </body>
    </html>
  );
}
