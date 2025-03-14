"use client";
import { useAddToCart, useDecrementFromCart } from "@/hooks/useCart";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";

import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

function CartItem({ cartItem }) {
  const { isLoading, mutateAsync: addToCarAsync } = useAddToCart();
  const { mutateAsync: decFromCartAsync } = useDecrementFromCart();
  const queryClient = useQueryClient();

  const addToCartHandler = async () => {
    try {
      const { message } = await addToCarAsync(cartItem._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };

  const decrementHandler = async () => {
    try {
      const { message } = await decFromCartAsync(cartItem._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="border rounded-xl p-4 flex justify-center md:justify-between items-center shadow-md">
      <span className="flex-1 font-bold">{cartItem.title}</span>
      <div className="flex items-center justify-between gap-x-2  md:gap-x-4 lg:gap-x-8 flex-1 text-nowrap">
        <div>
          <div>
            قیمت :{" "}
            <span
              className={`${
                cartItem.discount ? "line-through text-gray-500" : "font-bold"
              }`}
            >
              {toPersianNumbersWithComma(cartItem.price)}
            </span>
          </div>
          {!!cartItem.discount && (
            <div className="flex items-center gap-x-2 mt-2">
              <p className="font-bold">
                {" "}
                {toPersianNumbersWithComma(cartItem.offPrice)}
              </p>
              <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm text-nowrap">
                {toPersianNumbers(cartItem.discount)} %
              </div>
            </div>
          )}
        </div>

        <span className="border-r-2 pr-2 text-nowrap">
          تعداد : {toPersianNumbers(cartItem.quantity)}
        </span>
        <div className="flex gap-x-3">
          <button
            onClick={addToCartHandler}
            className=" text-white rounded p-1"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
            </svg>
          </button>
          <button onClick={decrementHandler} className=" rounded p-1">
            {cartItem.quantity > 1 ? (
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
              </svg>
            ) : (
              // <HiOutlineTrash className=" text-rose-500 w-6 h-6" />
              <svg
                className=" text-rose-500 w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
