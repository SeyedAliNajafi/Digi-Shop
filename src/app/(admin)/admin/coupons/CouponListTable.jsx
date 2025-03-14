import { couponListTableTHeads } from "@/constants/tableHeads";
import { useRemoveCoupon } from "@/hooks/useCoupons";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { toast } from "react-hot-toast";


function CouponListTable({ coupons }) {
  const { mutateAsync } = useRemoveCoupon();
  const queryClient = useQueryClient();

  const removeCouponHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-coupons"] });
    } catch (error) {
      toast.error(error?.respone?.data?.message);
    }
  };

  return (
    <div className="shadow-sm overflow-auto my-8">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
        <thead>
          <tr>
            {couponListTableTHeads.map((item) => {
              return (
                <th className="whitespace-nowrap table__th" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon, index) => {
            return (
              <tr key={coupon._id}>
                <td className="table__td">{index + 1}</td>
                <td className="table__td  whitespace-nowrap font-bold">
                  {coupon.code}
                </td>
                <td className="table__td">
                  <span className="badge badge--primary">{coupon.type}</span>
                </td>
                <td className="table__td">{coupon.amount}</td>
                <td className="table__td">
                  <div className="space-y-2 flex flex-col items-start">
                    {coupon.productIds.map((p) => {
                      return (
                        <span className="badge badge--secondary" key={p._id}>
                          {p.title}
                        </span>
                      );
                    })}
                  </div>
                </td>
                <td className="table__td">{coupon.usageCount}</td>
                <td className="table__td">{coupon.usageLimit}</td>
                <td className="table__td">
                  {toLocalDateStringShort(coupon.expireDate)}
                </td>
                <td className="table__td font-bold text-lg">
                  <div className="flex items-center gap-x-4">
                    <Link href={`/admin/coupons/${coupon._id}`}>
                      <svg
                        className="text-primary-900 w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                      </svg>
                    </Link>
                    <button onClick={() => removeCouponHandler(coupon._id)}>
                      <svg
                        className="text-rose-600 w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                      </svg>
                    </button>
                    <Link href={`/admin/coupons/edit/${coupon._id}`}>
                      <svg
                        className="w-6 h-6 text-secondary-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                      </svg>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default CouponListTable;
