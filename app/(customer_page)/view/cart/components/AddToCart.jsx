"use client";
import { useCartStore } from "@/app/store/store_product";
import { getPhoto } from "@/app/utils/util_function";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const AddToCart = ({ initState = 0, data }) => {
  const [qty, setQty] = useState(data?.quantity);
  const { deleteStoreCart, onChangeChecked } = useCartStore();

  console.log("cart : ", data);
  return (
    <main className="grid gap-6 grid-cols-[auto_auto_1fr] p-6 border rounded-lg">
      <input
        type="checkbox"
        defaultChecked={data?.isCheck ? true : false}
        className="checkbox"
        onClick={() => onChangeChecked(data?.id)}
      />
      <Image
        src={getPhoto(
          data?.productImg ||
            data?.productDetails?.productImg ||
            data?.serviceImage
        )}
        width={1000}
        height={1000}
        priority
        alt="product img"
        className="size-[8rem] rounded-small"
      />
      <div className="flex justify-between">
        <div>
          <h3 className="text-normal font-semibold">
            {data?.productName ||
              data?.serviceName ||
              data?.productDetails?.productName}
          </h3>
        </div>
        <div className="flex flex-col items-end justify-between">
          <h3 className="text-normal font-normal text-red-500">
            ${" "}
            {data?.unitPrice ||
              data?.servicePrice ||
              data?.productDetails?.unitPrice}
          </h3>
          <div className="flex items-center gap-6">
            <Trash2
              onClick={() => deleteStoreCart(data?.id)}
              className="stroke-slate-400 size-6 cursor-pointer hover:stroke-red-500 transition-all"
            />
            {data?.type == "product" && (
              <div className="flex justify-between items-center gap-3 w-full bg-bg py-2 px-6 rounded-md">
                <span className="text-normal font-semibold cursor-pointer">
                  -
                </span>
                <span className="text-normal size-10 flex items-center justify-center border px-2 rounded-md">
                  {qty}
                </span>
                <span
                  className="text-normal font-semibold cursor-pointer"
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddToCart;
