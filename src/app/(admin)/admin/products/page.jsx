"use client";

import { useGetProducts } from "@/hooks/useProducts";
import ProductListTable from "./ProductListTable";
import Link from "next/link";
import Loader from "@/common/Loader";

function page() {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};

  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-5">محصولات</h1>
        <Link
          href="/admin/products/add"
          className="font-bold text-primary-900 flex items-center gap-x-2"
        >
          <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg> <span>اضافه کردن محصول</span>
        </Link>
      </div>
      <ProductListTable products={products} />
    </div>
  );
}
export default page;

// add
// edit (update)
// remove (delete)
//  /admin/products/add (add)
// /admin/products/active()
