import vazirFont from "@/constants/localFonts";
import "../globals.css";
import Header from "../Header";
import { Toaster } from "react-hot-toast";
import Providers from "../Providers";
import { Suspense } from "react";
import Loader from "@/common/Loader";

export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js Course Fronthooks Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/assets/site.webmanifest"></link>
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans`}
      >
        <Suspense fallback={<Loader/>}>
          <Providers>
            <Toaster />
            <Header />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
