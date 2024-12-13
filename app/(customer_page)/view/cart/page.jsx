"use client";
import React from "react";
import AddToCart from "./components/AddToCart";
import { useCartStore } from "@/app/store/store_product";
import CartDetail from "./components/CartDetail";
import Image from "next/image";

const CartPage = () => {
  const { cartList, storeToCart } = useCartStore();

  return (
    <>
      {cartList?.length > 0 ? (
        <div className="w-[110rem] mx-auto my-md_margin">
          <h3 className="text-semi_header mb-6">My Cart</h3>
          <div className=" grid grid-cols-[1fr_45rem] gap-md_gap ">
            <div className="flex flex-col gap-6">
              {cartList?.map((item, idx) => (
                <AddToCart key={idx} data={item} />
              ))}
            </div>
            <div>
              <CartDetail cartList={cartList} />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[110rem] h-[70vh] grid place-content-center mx-auto my-md_margin">
          <div className="flex flex-col gap-4 items-center">
            <Image
              src={"/images/cart.png"}
              className="object-cover "
              width={1000}
              height={1000}
              alt="picture"
            />
            <h3 className="text-semi_header font-light">No Product in cart</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
