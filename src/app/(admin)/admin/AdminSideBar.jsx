"use client";

import { logout } from "@/services/authServices";
import Link from "next/link";

function AdminSideBar() {
  const logoutHandler = async () => {
    await logout();
    document.location.href = "/";
  };

  return (
    <div>
      <ul className="flex flex-col space-y-4 2xl:space-y-6">
        <li className="hover:bg-blue-500 rounded-2xl p-3 hover:text-white transition-all duration-[250ms]">
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className="hover:bg-blue-500 rounded-2xl p-3 hover:text-white transition-all duration-[250ms]">
          <Link href="/admin">داشبورد</Link>
        </li>
        <li className="hover:bg-blue-500 rounded-2xl p-3 hover:text-white transition-all duration-[250ms]">
          <Link href="/admin/users">کاربران</Link>
        </li>
        <li className="hover:bg-blue-500 rounded-2xl p-3 hover:text-white transition-all duration-[250ms]">
          <Link href="/admin/products">محصولات</Link>
        </li>
        <li className="hover:bg-blue-500 rounded-2xl p-3 hover:text-white transition-all duration-[250ms]">
          <Link href="/admin/categories">دسته بندی</Link>
        </li>
        <li className="hover:bg-blue-500 rounded-2xl p-3 hover:text-white transition-all duration-[250ms]">
          <Link href="/admin/payments">سفارشات </Link>
        </li>
        <li className="hover:bg-blue-500 rounded-2xl p-3 hover:text-white transition-all duration-[250ms]">
          <Link href="/admin/coupons">کد تخفیف</Link>
        </li>
        <li className="flex justify-between items-center hover:bg-red-500 p-3 rounded-2xl transition-all duration-[250ms] hover:text-white fill-current">
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
    </div>
  );
}
export default AdminSideBar;
