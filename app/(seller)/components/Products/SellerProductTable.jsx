import Image from "next/image";
import React from "react";
import SellerProductDropdown from "../SellerProductDropdown";

function SellerProductTable({ length }) {
  return (
    <section className="h-full rounded-3xl bg-bg ">
      <table className="w-full rounded-3xl">
        <thead className=" bg-primary">
          <tr className=" rounded-3xl overflow-y-scroll">
            <th className="text-center p-8  text-white font-semibold">Image</th>
            <th className="text-center p-8 text-white font-semibold">
              Product Name
            </th>
            <th className=" text-center p-8 text-white font-semibold">
              Barcode
            </th>
            <th className="text-center p-8 text-white font-semibold">
              Category
            </th>
            <th className="text-center p-8 text-white font-semibold">Price</th>
            <th className="text-center  p-8 text-white font-semibold">
              Discount
            </th>
            <th className="text-center p-8 text-white font-semibold">
              Quality
            </th>
            <th className="text-center p-8 text-white font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: length ? length : 5 }).map((arr) => (
            <tr key={arr}>
              <td className="text-center text-near_normal">
                <section className="w-[10rem] mx-auto bg-white p-5 rounded-3xl">
                  <Image
                    src="/svgs/mac.svg"
                    width={50}
                    height={50}
                    alt="Product-img"
                  />
                </section>
              </td>
              <td className="text-center font-semibold text-near_normal">
                Iphone 15 Pro Max
              </td>
              <td className="text-center text-near_normal">9102938483920</td>
              <td className="text-center text-near_normal">Smartphone</td>
              <td className="text-center text-near_normal">$3000.00</td>
              <td className="text-center text-near_normal text-green-500">
                10%
              </td>
              <td className="text-center text-near_normal">1092</td>
              <td className="text-center text-near_normal">
                <SellerProductDropdown />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default SellerProductTable;
