import Logo from "@/common/Logo";
import React, { useEffect, useRef } from "react";
import "../../style.css";
import Link from "next/link";
import ProfilePic from "@/common/ProfilePic";
import { logout } from "@/services/authServices";

function SideBarMobile({ isOpen, setIsOpen , user }) {
  const logoutHandler = async () => {
    await logout();
    document.location.href = "/";
  };
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
  return (
    <div
      ref={sidebarRef}
      className={`w-[280px] lg:hidden fixed h-screen z-50 bg-white p-4 top-0 -right-1 tran  ${isOpen ? "translate-x-0" : "translate-x-[280px]"}`}
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
      <hr className="border-gray-300 mb-20" />
      <ul className="flex flex-col gap-y-8">
        <Link
          href="/profile"
          className="hover:bg-blue-500 rounded-2xl p-3 hover:text-white transition-all duration-[250ms] font-semibold"
        >
          داشبورد
        </Link>
        <Link
          href="/profile/me"
          className="hover:bg-blue-500 rounded-2xl p-3 hover:text-white transition-all duration-[250ms] font-semibold"
        >
          اطلاعات کاربری
        </Link>
        <Link
          href="/profile/payments"
          className="hover:bg-blue-500 rounded-2xl p-3 hover:text-white transition-all duration-[250ms] font-semibold"
        >
          سفارشات
        </Link>
        <li className="flex justify-between items-center hover:bg-red-500 p-3 rounded-2xl transition-all duration-[250ms] hover:text-white fill-current font-semibold">
          <div>
            <button onClick={logoutHandler}>خروج از حساب کاربری</button>
          </div>
          <span className="size-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
            </svg>
          </span>
        </li>
      </ul>
      {!user ? null : (
        <div className="flex justify-between items-center w-fit md:gap-x-4 lg:gap-x-6 xl:gap-x-7 fixed bottom-10 border border-gray-400 rounded-2xl p-3">
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

export default SideBarMobile;
