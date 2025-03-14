import vazirFont from "@/constants/localFonts";
import "../../globals.css";
import Providers from "../../Providers";
import { Toaster } from "react-hot-toast";


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
        <Providers>
          <Toaster />
          {/* <div className="grid grid-cols-5 bg-white h-screen">
            <div className="col-span-1 bg-white overflow-y-auto p-4 hidden lg:block">
              <SideBar />
            </div>
            <div className="lg:col-span-4 overflow-y-auto col-span-5">
              {children}
            </div>
          </div> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
