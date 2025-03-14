"use client";


import Loader from "@/common/Loader";
import { useGetUser } from "@/hooks/useAuth";
import { useAddToCart } from "@/hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

function AddToCart({ product }) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data } = useGetUser();
  const { isLoading, mutateAsync } = useAddToCart();
  const { user } = data || {};

  const addToCartHandler = async () => {
    if (!user) {
      toast.error("لطفا ابتدا لاگین کنید.");
      router.push("/auth");
      return;
    }

    try {
      const { message } = await mutateAsync(product._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };
console.log(product);

  const isInCart = (user, product) => {
    if (!user) return false;
    return user.cart?.products.some((p) => p.productId === product._id);
  };
  return (
    <div className="mt-2">
      {isInCart(user, product) ? (
        <Link href="/cart" className="text-primary-900 font-bold text-sm md:text-base md:mt-2">
          ادامه سفارش
        </Link>
      ) : isLoading ? (
        <Loader />
      ) : (
        <button onClick={addToCartHandler} className="btn btn--primary py-2 text-sm md:text-base">
          اضافه کردن به سبد خرید
        </button>
      )}
    </div>
  );
}
export default AddToCart;
