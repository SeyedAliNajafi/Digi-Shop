"use client";


import { useGetUser } from "@/hooks/useAuth";
import Link from "next/link";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import Loader from "@/common/Loader";

function CartPage() {
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};

  if (isLoading) return <Loader />;

  if (!user || !data)
    return (
      <div className="container lg:max-w-screen-lg">
        <p className="font-bold mb-4">برای مشاهده سبد خرید لطفا لاگین کنید</p>
        <Link href="/auth" className="text-lg font-bold text-primary-900">
          رفتن به صفحه لاگین؟
        </Link>
      </div>
    );

  if (!user.cart?.products || user.cart?.products.length === 0)
    return (
      <div>
        <p>سبد خرید خالیه!</p>
        <Link href="/products" className="text-lg font-bold text-primary-900">
          رفتن به صفحه محصولات
        </Link>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 container xl:max-w-screen-xl mt-6">
      <div className="col-span-3 space-y-5">
        {cart &&
          cart.productDetail.map((item) => {
            return <CartItem key={item._id} cartItem={item} />;
          })}
      </div>
      <div className="col-span-1">
        <CartSummary payDetail={cart.payDetail} />
      </div>
    </div>
  );
}
export default CartPage;
