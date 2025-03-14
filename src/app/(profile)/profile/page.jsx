"use client";

import { useGetUser } from "@/hooks/useAuth";
import { toLocalDateString, toLocalDateStringShort } from "@/utils/toLocalDate";
import PaymentTable from "./payments/PaymentTable";
import Link from "next/link";
import Loader from "@/common/Loader";
import Greeting from "@/components/Greeting";
import SideBar from "./SideBar";
import { useState } from "react";
import SideBarMobile from "./SideBarMobile";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};
  if (isLoading) return <Loader />;
  return (
    <div className="grid grid-cols-5 bg-white h-screen">
      <div className="col-span-1 bg-white p-4 hidden lg:block w-full overflow-y-hidden">
        <SideBar user={user} />
      </div>
      <SideBarMobile isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
      <div className="lg:col-span-4 overflow-y-auto col-span-5">
        <div className="h-full">
          <div className="bg-white p-4 flex justify-between ">
            <div className="flex items-center gap-x-2 flex-col lg:flex-row">
              <div className="flex items-center gap-x-1">
                <span className="lg:hidden" onClick={() => setIsOpen(true)}>
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
                <h1 className="text-lg">
                  سلام؛ <span className="font-black text-xl">{user.name}</span>
                </h1>
              </div>
              <span className="hidden lg:block h-4 w-0.5 bg-gray-200"></span>
              <Greeting />
            </div>
            <div className="flex gap-x-3">
              <Link href="/cart">
                <button className="border-gray-200 border p-2 rounded-2xl shadow-lg">
                  <svg
                    className="h-6 w-6 text-secondary-700 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </button>
              </Link>
              <Link href="/profile">
                <button className="border-gray-200 border p-2 rounded-2xl shadow-lg">
                  <svg
                    className="h-6 w-6 text-secondary-700 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="p-4 rounded-tr-3xl bg-gray-100/60 h-full">
            <div>
              <h2 className="font-black text-xl mb-2">سوابق من</h2>
              <div className="flex flex-col lg:flex-row gap-5 lg:w-full">
                <div className="flex gap-x-3 items-center bg-white p-3 rounded-xl lg:p-6 shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-200 hover:shadow-gray-200 max-w-lg lg:max-w-full lg:w-full">
                  <div className="flex items-center justify-center text-white bg-slate-500 p-2 rounded-xl ">
                    <svg
                      className="size-7 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-secondary-400">تاریخ پیوستن</p>
                    <p className="font-bold text-secondary-700">
                      {toLocalDateStringShort(user.createdAt)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-3 items-center bg-white p-3 rounded-xl lg:p-6 shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-200 hover:shadow-gray-200 max-w-lg lg:max-w-full lg:w-full">
                  <div className="flex items-center justify-center text-white bg-green-500 p-2 rounded-xl ">
                    <svg
                      className="size-7 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-secondary-400">سفارشات</p>
                    <p className="font-bold text-secondary-700">
                      {toPersianNumbers(payments.length)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-3 items-center bg-white p-3 rounded-xl lg:p-6 shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-200 hover:shadow-gray-200 max-w-lg lg:max-w-full lg:w-full">
                  <div className="flex items-center justify-center text-white bg-red-500 p-2 rounded-xl ">
                    <svg
                      className="size-7 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-secondary-400">
                      کالا‌های لایک شده
                    </p>
                    <p className="font-bold text-secondary-700">
                      {toPersianNumbers(user.likedProducts.length)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-xl mt-8 ">
              <div className="p-4 flex lg:items-center justify-between flex-col lg:flex-row gap-y-1.5">
                <h2 className="font-bold text-xl">آخرین سفارشات کاربر</h2>
                <Link
                  className="text-primary-900 font-bold"
                  href="/profile/payments"
                >
                  مشاهده همه سفارشات
                </Link>
              </div>
              <PaymentTable
                payments={payments
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .slice(0, 3)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
