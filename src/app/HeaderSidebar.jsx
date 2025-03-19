import Logo from "@/common/Logo";
import React, { useEffect, useRef } from "react";
import "./style.css";
import Link from "next/link";
import ProfilePic from "@/common/ProfilePic";
import MiniLoader from "@/common/MiniLoader";

function HeaderSidebar({ isOpen, setIsOpen, user, isLoading }) {
  const sidebarRef = useRef(null);

  // Function to handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  // if (isLoading) return <MiniLoader />;
  return (
    <div
      ref={sidebarRef}
      className={`w-[280px] fixed h-screen z-50 bg-white p-4 top-0 -right-1 tran  ${isOpen ? "translate-x-0" : "translate-x-[280px]"}`}
    >
      <div className="flex justify-between items-center w-full">
        <Link href="/">
          <Logo />
        </Link>
        <span className="size-5" onClick={() => setIsOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </span>
      </div>
      <hr className="border-gray-300 mb-12" />
      <div className="flex flex-col gap-y-12">
        <div>
          <Link href="/" className="flex gap-x-3 items-center">
            <svg
              className="size-7 fill-current text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
            <p className="font-bold text-lg">خانه</p>
          </Link>
        </div>
        <div>
          <Link href="/products" className="flex gap-x-3 items-center">
            <svg
              className="size-7 fill-current text-gray-600 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5l0 112.2c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7L0 413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3l0-119.1c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3l0-112.2c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2 0-89.2L392 121l0 89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4l0-100.5L256 323.2l0 95.9-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1 0-100.5L528 323.2l0 90.7c0 3.2-1.9 6-4.8 7.3z" />
            </svg>
            <p className="font-bold text-lg">محصولات</p>
          </Link>
        </div>
        <div>
          <Link
            href="/#contact-us-mobile"
            className="flex gap-x-3 items-center"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="size-7 fill-current text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            <p className="font-bold text-lg">ارتباط با ما </p>
          </Link>
        </div>
      </div>
      {!user ? null : (
        <div className="flex justify-between items-center w-fit gap-x-3 md:gap-x-4 lg:gap-x-6 xl:gap-x-7 fixed bottom-10 border border-gray-400 rounded-2xl p-3">
          <ProfilePic />
          <div>
            <p className="font-semibold text-md">{user.name}</p>
            {user.role === "USER" ? (
              <p className="text-sm">کاربر</p>
            ) : (
              <p className="text-sm">ادمین</p>
            )}
          </div>
          <Link href="/profile/me" className="">
            <svg
              className="size-6 fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}

export default HeaderSidebar;
