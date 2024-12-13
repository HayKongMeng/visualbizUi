"use client";
import Image from "next/image";
import React, { Fragment } from "react";
import Cart from "./Cart";
import OrderDetails from "./OrderDetails";
import { useState } from "react";
import AddToCartCard from "../Cards/AddToCartCard";

function CartLists({ cartData, data, isOpen }) {
  return (
    <section className="text-normal ">
      <section className="flex flex-col gap-5">
        <section className="flex gap-4 items-center pt-5">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <div className="text-near_normal">Select all</div>
        </section>
        <div
          id="hide-scrollbar"
          className="h-[25rem] overflow-y-scroll flex flex-col gap-5 "
        >
          {cartData.map((cart, idx) => (
            <Fragment key={cart.id}>
              {/* <Cart data={cart} /> */}
              <AddToCartCard key={idx} data={cart} />
            </Fragment>
          ))}
        </div>
        <OrderDetails isOpen={isOpen} cartData={cartData} />
      </section>
    </section>
  );
}

export default CartLists;
