import "./globals.css";
import "./animate.css";

import { Inter } from "next/font/google";

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import WowMain from "./_components/WowMain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(`https://muhammadurwah.vercel.app/`),
  title: "Muhammad Urwah | Portfolio",
  description: "Full Stack Web Developer",
  openGraph: {
    title: "Muhammad Urwah | Portfolio",
    description: "Full Stack Web Developer",
    url: `/`,
    siteName: "Muhammad Urwah | Portfolio",
    images: [
      {
        url: `/preview.png`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Urwah | Portfolio",
    description: "Full Stack Web Developer",
    creator: "@urwah1248",
    images: [`/preview.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-bg"}>
        <Header />
        <WowMain>{children}</WowMain>
        <Footer />
      </body>
    </html>
  );
}
