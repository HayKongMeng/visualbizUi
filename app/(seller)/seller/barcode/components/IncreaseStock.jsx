"use client";
import { restock } from "@/app/store/stock";
import { Staatliches } from "next/font/google";
import React, { useState } from "react";

const IncreaseStock = ({stock,setStock,setQuantity,quantity}) => {
//   const setStock = restock((state)=> state.setStock)
  return (
    <section className="flex gap-[2rem] items-center bg-bg py-2 px-6 rounded-small">
      <button
        onClick={() =>{
            setQuantity(quantity > 0 ? quantity - 1 : 0)
            // setStock(stock > 0 ? stock - 1 :0)
        }}
        className={`text-near_normal ${quantity <= 0 ? "text-gray-400" : ""}`}
      >
        -
      </button>
      <p className="size-[2rem] text-secondary font-medium p-2 flex items-center justify-center border rounded-md text-normal">
        {quantity}
      </p>
      <button
        onClick={() => {
            setQuantity(quantity + 1)
            // setStock(stock+1)

        }}
        className="text-near_normal"
      >
        +
      </button>
    </section>
  );
};

export default IncreaseStock
