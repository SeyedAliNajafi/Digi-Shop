"use client";

import { userPaymentTHeads } from "@/constants/tableHeads";
import { useGetUser } from "@/hooks/useAuth";
import { toLocalDateString, toLocalDateStringShort } from "@/utils/toLocalDate";
// import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import PaymentTable from "./PaymentTable";
import Loader from "@/common/Loader";
import SideBar from "../SideBar";
import SideBarMobile from "../SideBarMobile";
import { useState } from "react";
import Greeting from "@/components/Greeting";
import Link from "next/link";

function Payments() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};

  if (isLoading) return <Loader />;
  return (
    <div className="grid grid-cols-5 bg-white h-screen">
      <div className="col-span-1 bg-white overflow-y-hidden w-full p-4 hidden lg:block">
        <SideBar />
      </div>
      <SideBarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="lg:col-span-4 overflow-y-auto col-span-5">
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
        <div className="bg-gray-100/60 rounded-2xl p-3 w-full h-full">
          <div className="p-4">
            <h1 className="font-bold text-xl">سفارشات کاربر</h1>
          </div>
          <div className="bg-white rounded-2xl">
            <PaymentTable payments={payments} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payments;
