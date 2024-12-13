"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import Image from "next/image";
import React, { Fragment } from "react";
import CartLists from "./CartLists";
import { useCartStore } from "@/app/store/store_product";
import { useState } from "react";

function AddToCart() {
  const { cartList, storeToCart } = useCartStore();
  const [isOpen, setOpen] = useState(false);
  return (
    <section>
      <section>
        <Popover
          showArrow={true}
          isOpen={isOpen}
          onOpenChange={(open) => setOpen(open)}
        >
          <PopoverTrigger>
            <section className="relative">
              <Image
                width={1000}
                height={1000}
                alt="cart"
                src="/svgs/cart.svg"
                className="size-[2.6rem] cursor-pointer object-cover rounded-full"
              />
            </section>
          </PopoverTrigger>
          <PopoverContent>
            <section className=" p-[2rem] w-[40rem] h-fit max-h-[60rem] overflow-y-scroll no-scrollbar">
              <section className="flex flex-col gap-6 h-full">
                <section className="text-[1.8rem] font-bold">My Cart</section>
                <section className="w-full h-full flex flex-col gap-4">
                  {cartList.length === 0 && (
                    <section className="flex flex-col justify-center items-center gap-4 h-full">
                      <section className="w-[10rem]"></section>
                      <section className="text-2xl font-bold">No Items</section>
                      <section className="text-[1.2rem] text-black/25">
                        You have not purchased any items in your shopping cart!
                      </section>
                    </section>
                  )}

                  {cartList.length > 0 && (
                    <CartLists isOpen={setOpen} cartData={cartList} />
                  )}
                </section>
              </section>
            </section>
          </PopoverContent>
        </Popover>
      </section>
    </section>
  );
}

export default AddToCart;
