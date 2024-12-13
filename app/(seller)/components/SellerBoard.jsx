import React from "react";
import CustomerComment from "./CustomerComment";

function SellerBoard() {
  return (
    <section className="h-auto rounded-3xl bg-bg">
      <table className="w-full rounded-3xl">
        <thead className="border-b">
          <tr>
            <th className="p-8 ">CUSTOMERS</th>
            <th className="p-8">Product</th>
            <th className="p-8">Price</th>
            <th className="text-right p-8">PRODUCT RATING</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td>
              <CustomerComment />
            </td>
            <td className="text-near_normal">Iphone 15 Pro Max</td>
            <td className="font-semibold text-near_normal">$1500</td>
            <td className="text-right text-near_normal">⭐ ⭐ ⭐ ⭐ ⭐</td>
          </tr>
          <tr>
            <td>
              <CustomerComment />
            </td>
            <td className="text-near_normal">Iphone 15 Pro Max</td>
            <td className="font-semibold text-near_normal">$1500</td>
            <td className="text-right text-near_normal">⭐ ⭐ ⭐ ⭐ ⭐</td>
          </tr>
          <tr>
            <td>
              <CustomerComment />
            </td>
            <td className="text-near_normal">Iphone 15 Pro Max</td>
            <td className="font-semibold text-near_normal">$1500</td>
            <td className="text-right text-near_normal">⭐ ⭐ ⭐ ⭐ ⭐</td>
          </tr>
          <tr>
            <td>
              <CustomerComment />
            </td>
            <td className="text-near_normal">Iphone 15 Pro Max</td>
            <td className="font-semibold text-near_normal">$1500</td>
            <td className="text-right text-near_normal">⭐ ⭐ ⭐ ⭐ ⭐</td>
          </tr>
          <tr>
            <td>
              <CustomerComment />
            </td>
            <td className="text-near_normal">Iphone 13 Pro Max</td>
            <td className="font-semibold text-near_normal">$1500</td>
            <td className="text-right text-near_normal">⭐ ⭐ ⭐ ⭐ ⭐</td>
          </tr>
          <tr>
            <td>
              <CustomerComment />
            </td>
            <td className="text-near_normal">Iphone 15 Pro Max</td>
            <td className="font-semibold text-near_normal">$1500</td>
            <td className="text-right text-near_normal">⭐ ⭐ ⭐ ⭐ ⭐</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default SellerBoard;
