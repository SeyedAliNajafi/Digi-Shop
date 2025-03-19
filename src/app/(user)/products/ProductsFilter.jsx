"use client";
import CheckBox from "@/common/CheckBox";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

function ProductsFilter({ categories }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("category")?.split(",") || []
  );
  // console.log(searchParams.getAll("category")[0].split(","));

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const categoryHandler = (e) => {
    const value = e.target.value;
    if (selectedCategories.includes(value)) {
      const categories = selectedCategories.filter((c) => c !== value);
      setSelectedCategories(categories);
      router.push(pathname + "?" + createQueryString("category", categories));
    } else {
      setSelectedCategories([...selectedCategories, value]);
      router.push(
        pathname +
          "?" +
          createQueryString("category", [...selectedCategories, value])
      );
    }
  };
  return (
    <div className="mb-8">
      <h1 className="text-xl font-bold my-4 hidden lg:block">صفحه محصولات</h1>
      <div className="hidden lg:block">
        <p className="font-bold mb-4 ">دسته بندی ها</p>
        <ul className=" space-y-4">
          {categories.map((category) => {
            return (
              <CheckBox
                key={category._id}
                id={category._id}
                value={category.englishTitle}
                name="product-type"
                label={category.title}
                onChange={categoryHandler}
                checked={selectedCategories.includes(category.englishTitle)}
              />
            );
          })}
        </ul>
      </div>
      <div className="lg:hidden">
        <div
          className="flex gap-0.5 font-bold bg-gray-300 p-2.5 rounded-3xl items-center mb-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
          </svg>
          دسته بندی‌ها
        </div>
        <ul
          className={`space-y-4 transition-all duration-150 ${isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"}`}
        >
          {categories.map((category) => {
            return (
              <CheckBox
                key={category._id}
                id={category._id}
                value={category.englishTitle}
                name="product-type"
                label={category.title}
                onChange={categoryHandler}
                checked={selectedCategories.includes(category.englishTitle)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default ProductsFilter;
