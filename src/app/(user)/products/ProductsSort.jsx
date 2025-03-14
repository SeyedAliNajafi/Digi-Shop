"use client";

import RadioInput from "@/common/RadioInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const sortOptions = [
  {
    id: 1,
    value: "latest",
    label: "جدید ترین",
  },
  {
    id: 2,
    value: "earliest",
    label: "قدیمی ترین",
  },
  {
    id: 3,
    value: "popular",
    label: "محبوب ترین",
  },
];

function ProductsSort() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState("");
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const sortHandler = (e) => {
    const value = e.target.value;
    setSort(value);
    router.push(pathname + "?" + createQueryString("sort", value));
  };

  useEffect(() => {
    setSort(searchParams.get("sort") || "");
  }, [searchParams]);

  return (
    <div>
      <div className="lg:hidden mb-4">
        <div
          className="flex gap-0.5 font-bold bg-gray-300 p-2.5 rounded-3xl items-center mb-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
          </svg>
          مرتب سازی
        </div>
        <div
          className={`space-y-4 transition-all duration-150 ${isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"}`}
        >
          {sortOptions.map((item) => {
            return (
              <RadioInput
                id={item.id}
                key={item.id}
                label={item.label}
                name="product-sort"
                value={item.value}
                checked={sort == item.value}
                onChange={sortHandler}
              />
            );
          })}
        </div>
      </div>
      <div className="hidden lg:block">
        <p className="font-bold mb-4">مرتب سازی</p>
        <div className="space-y-4">
          {sortOptions.map((item) => {
            return (
              <RadioInput
                id={item.id}
                key={item.id}
                label={item.label}
                name="product-sort"
                value={item.value}
                checked={sort == item.value}
                onChange={sortHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ProductsSort;
