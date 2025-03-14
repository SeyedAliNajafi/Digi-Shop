"use client";
import Logo from "@/common/Logo";
import ProfilePic from "@/common/ProfilePic";
import { useGetUser } from "@/hooks/useAuth";
import { logout } from "@/services/authServices";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "./style.css";
import HeaderSidebar from "./HeaderSidebar";

function Header() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);
  const { data, error, isLoading } = useGetUser();
  const { user, cart } = data || {};
  useEffect(() => {
    if (!user || user.role === "USER") {
      setIsAdmin(false);
    } else if (user.role === "ADMIN") {
      setIsAdmin(true);
    }
  }, [user]);

  const logoutHandler = async () => {
    await logout();
    document.location.href = "/";
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) // Exclude button
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className={`px-3 shadow-md z-50  sticky top-0 transition-all duration-200 bg-white ${isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"}`}
    >
      <HeaderSidebar
        isOpen={sidebar}
        setIsOpen={setSidebar}
        user={user}
        isLoading={isLoading}
      />
      <nav className="flex items-center justify-between py-2 container xl:max-w-screen-xl">
        <div className="items-center gap-x-8 hidden md:flex">
          <Link href="/">
            <Logo />
          </Link>
          <Link
            href="/products"
            className="hover:text-primary-900 transition-all duration-200"
          >
            محصولات
          </Link>
          <Link
            className="hover:text-primary-900 transition-all duration-200"
            href="/#contact-us"
          >
            ارتباط با ما
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-x-4">
          <span onClick={() => setSidebar(true)}>
            <svg
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="h-7 w-7 text-gray-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </span>
          <Link href="/">
            <Logo size="size-12" />
          </Link>
        </div>
        <div className="flex items-center gap-x-4 md:gap-x-6">
          <Link href="/cart">
            <button className="border-gray-200 border p-2 rounded-2xl shadow-lg">
              <span className="relative">
                <svg
                  className="h-6 w-6 text-secondary-700 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                <span className="absolute -top-[37%] -right-[170%]  bg-red-500 text-white font-bold rounded-full px-1 py-0.5 flex justify-center items-center text-xs ">
                  {cart ? cart.payDetail.productIds.length : 0}
                </span>
              </span>
            </button>
          </Link>
          {user ? (
            <div className="relative">
              <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
                <span className="border-gray-200 border p-2 rounded-2xl flex items-center gap-x-1.5 shadow-lg">
                  <svg
                    className="h-6 w-6 text-secondary-700 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-secondary-700 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </span>
              </button>
              <div
                ref={popupRef}
                className={`container xl:max-w-screen-xl w-[250px] shadow-xl absolute bg-white max-h-6 top-10 left-10 rounded-xl py-3 px-4 c border border-gray-300 ${isOpen ? "k scale-100 visible " : "p invisible"}`}
              >
                <div className="flex gap-3 mt-1">
                  <ProfilePic />
                  <div>
                    <p className="font-bold">{user.name}</p>
                    <p className="text-gray-500">{user.phoneNumber}</p>
                  </div>
                </div>
                <hr className="my-2 border border-gray-200" />
                <div className="flex flex-col gap-y-3">
                  <Link
                    href="/profile"
                    className="flex items-center gap-x-4 text-secondary-700 hover:bg-gray-100 hover:text-primary-900 fill-current p-2 rounded-xl transition-all duration-200"
                  >
                    <svg
                      className="size-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                    <p className="font-semibold">حساب کاربری</p>
                  </Link>
                  {isAdmin ? (
                    <Link
                      href="/admin"
                      className="flex items-center gap-x-4 text-secondary-700 hover:bg-gray-100 hover:text-primary-900 fill-current p-2 rounded-xl transition-all duration-200"
                    >
                      <svg
                        className="size-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z" />
                      </svg>
                      <p className="font-semibold">پنل ادمین</p>
                    </Link>
                  ) : (
                    null
                  )}
                  <Link
                    href="/profile/payments"
                    className="flex items-center gap-x-4 text-secondary-700 hover:bg-gray-100 hover:text-primary-900 fill-current p-2 rounded-xl transition-all duration-200"
                  >
                    <svg
                      className="size-6 fill-current "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                    <p className="font-semibold">سفارش های من</p>
                  </Link>
                  <button
                    className="flex items-center gap-x-4 text-secondary-700 hover:bg-gray-100 hover:text-red-600 fill-current p-2 rounded-xl transition-all duration-200"
                    onClick={logoutHandler}
                  >
                    <svg
                      className="size-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                    </svg>
                    <p className="font-semibold">خروج</p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/auth">
              <div className="flex gap-x-2 bg-primary-900 px-2 py-2.5 rounded-3xl text-white hover:text-primary-900 hover:bg-white transition-all duration-500 shadow-lg">
                <svg
                  className="size-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                </svg>
                <p>ورود</p>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
export default Header;
