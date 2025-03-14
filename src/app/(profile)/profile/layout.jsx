import vazirFont from "@/constants/localFonts";
import "../../globals.css";
import Providers from "../../Providers";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loader from "@/common/Loader";

export const metadata = {
  title: "پروفایل کاربر",
  description: "پروفایل کاربر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans`}
      >
        <Suspense fallback={<Loader />}>
          <Providers>
            <Toaster />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
