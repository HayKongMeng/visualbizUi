"use client";
import { useOrderCountStore } from "@/app/store/orderCount";
import { useCartStore } from "@/app/store/store_product";
import React from "react";

const CountLabel = () => {
  const { cartList } = useCartStore();
  if (cartList?.length <= 0) return;
  return (
    <span className="size-[1.6rem] flex justify-center items-center rounded-full bg-red-500 text-white">
      {cartList?.length}
    </span>
  );
};

export default CountLabel;
