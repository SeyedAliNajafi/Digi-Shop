import { userPaymentTHeads } from "@/constants/tableHeads";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import Link from "next/link";

function PaymentTable({ payments }) {
  return (
    <div className="shadow-sm overflow-auto my-8 ">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
        <thead>
          <tr>
            {userPaymentTHeads.map((item) => {
              return (
                <th className="whitespace-nowrap table__th" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => {
            return (
              <tr key={payment._id}>
                <td className="table__td">{index + 1}</td>
                <td className="table__td  whitespace-nowrap truncate">
                  {payment.invoiceNumber}
                </td>
                <td className="table__td  max-w-[280px] whitespace-nowrap truncate">
                  {payment.description}
                </td>
                <td className="table__td">
                  <div className="flex flex-col gap-y-2 items-start">
                    {payment.cart.productDetail.map((product) => {
                      return (
                        <Link
                          className="badge badge--secondary hover:bg-blue-500 transition-all duration-[250ms]"
                          href={`/products/${product.slug}`}
                          target="_blank"
                          key={product._id}
                        >
                          {" "}
                          <span>{product.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </td>
                <td className="table__td font-bold text-lg">
                  {toPersianNumbersWithComma(payment.amount)}
                </td>
                <td className="table__td">
                  {toLocalDateStringShort(payment.createdAt)}
                </td>
                <td className="table__td">
                  {payment.status === "COMPLETED" ? (
                    <span className="badge badge--success">موفق</span>
                  ) : (
                    <span className="badge badge--error">ناموفق</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default PaymentTable;
