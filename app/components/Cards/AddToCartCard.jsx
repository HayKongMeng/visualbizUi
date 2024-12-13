"use client";
import { useOrderCountStore } from "@/app/store/orderCount";
import { useCartStore } from "@/app/store/store_product";
import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const AddToCartCard = ({ data }) => {
  const { deleteStoreCart } = useCartStore();
  const { desCount } = useOrderCountStore();
  const [quantity, setQuantity] = useState(1);
  return (
    <section className="p-4 relative rounded-medium border grid grid-cols-[auto_1fr] gap-6">
      <section className="modal-action absolute right-[1rem] top-[-.5rem]">
        <div
          onClick={() => {
            deleteStoreCart(data.id);
            desCount();
          }}
          className="cursor-pointer bg-primar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon size-[3rem] p-2 hover:duration-300 rounded-full  stroke-black hover:stroke-red-500"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              //   stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </div>
      </section>
      <Image
        width={1000}
        height={1000}
        alt="product img"
        priority
        src={getPhoto(data?.productImg)}
        className="size-[10rem] rounded-md"
      />
      <div className=" flex flex-col justify-between">
        <p className="text-normal">{data?.productName || data?.service_name}</p>
        <div className="flex justify-between items-center">
          <section className="flex gap-[2rem] items-center   rounded-small">
            <button
              onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
              className={`text-[2rem] ${quantity <= 0 ? "text-gray-400" : ""}`}
            >
              -
            </button>
            <p className="size-[2rem] font-medium p-2 flex items-center justify-center border rounded-md text-normal">
              {quantity}
            </p>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-[2rem]"
            >
              +
            </button>
          </section>
          <p className="text-mid text-red-500">$ {data?.unitPrice}</p>
        </div>
      </div>
    </section>
  );
};

export default AddToCartCard;
