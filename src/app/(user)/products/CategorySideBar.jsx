import { Suspense } from "react";
import ProductsFilter from "./ProductsFilter";
import ProductsSort from "./ProductsSort";
import Loader from "@/common/Loader";

function CategorySidebar({ categories }) {
  return (
    <div className="col-span-1 ">
      <div className="hidden lg:block">
        <Suspense fallback={<Loader />}>
          <ProductsFilter categories={categories} />
          <ProductsSort />
        </Suspense>
      </div>
      <div className="lg:hidden flex gap-x-4">
        <Suspense fallback={<Loader />}>
          <ProductsFilter categories={categories} />
          <ProductsSort />
        </Suspense>
      </div>
    </div>
  );
}
export default CategorySidebar;
