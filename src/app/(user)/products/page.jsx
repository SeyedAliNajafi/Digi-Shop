import { getCategories } from "@/services/categoryService";
import queryString from "query-string";
import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";
import { getProducts } from "@/services/productsService";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import CategorySidebar from "./CategorySideBar";

export const dynamic = "force-dynamic"; // eq to {cache :"no-store"} or SSR in pages Dir. :)

async function Products({ searchParams }) {
  // const { products } = await getProducts(queryString.stringify(searchParams));
  // const { categories } = await getCategories();
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);
  const productsPromise = getProducts(
    queryString.stringify(searchParams),
    strCookies
  );

  const categoryPromise = getCategories();
  const [{ products }, { categories }] = await Promise.all([
    productsPromise,
    categoryPromise,
  ]);

  return (
    <div className="container xl:max-w-screen-xl flex flex-col justify-center items-center md:block">
      <h1 className="text-xl font-bold my-4">صفحه محصولات</h1>
      <div className="grid grid-cols-4">
        <div className="hidden lg:block">
          <CategorySidebar categories={categories} />
        </div>
        <div className="col-span-3">
          <SearchBar products={products} categories={categories} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Products;
