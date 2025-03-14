import ProductsFilter from "./ProductsFilter";
import ProductsSort from "./ProductsSort";

function CategorySidebar({ categories }) {
  return (
    <div className="col-span-1 ">
      <div className="hidden lg:block">
        <ProductsFilter categories={categories} />
        <ProductsSort />
      </div>

      <div className="lg:hidden flex gap-x-4">
        <ProductsFilter categories={categories} />
        <ProductsSort />
      </div>
    </div>
  );
}
export default CategorySidebar;
