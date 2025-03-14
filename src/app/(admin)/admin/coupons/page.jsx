"use client";

import { useGetCoupons } from "@/hooks/useCoupons";
import Link from "next/link";

import CouponListTable from "./CouponListTable";
import Loader from "@/common/Loader";

function page() {
  const { isLoading, data } = useGetCoupons();
  const { coupons } = data || {};
  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-5">کد های تخفیف</h1>
        <Link
          href="/admin/coupons/add"
          className="font-bold text-primary-900 flex items-center gap-x-2"
        >
          <svg
            className="size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>{" "}
          <span>اضافه کردن کد تحفیف</span>
        </Link>
      </div>
      <CouponListTable coupons={coupons} />
    </div>
  );
}
export default page;
