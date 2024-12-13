import Image from "next/image";
import React from "react";
import ButtonIncreaseQuantityV2 from "../Buttons/ButtonIncreaseQtyV2";

function Cart({ data }) {
  return (
    <section className="flex gap-5 py-5">
      <section className="flex gap-5 items-center">
        <input type="checkbox" className="w-[20px] h-[20px]" />
        <section className="w-[8rem]">
          <Image
            alt="Cart Image"
            src={data.img}
            className="rounded"
            width={200}
            height={100}
          />
        </section>
      </section>
      <section className="flex justify-between w-full">
        <section className="flex flex-col gap-4 justify-between text-[1.2rem]">
          <section className="font-semibold">{data.title}</section>
          <section className="text-black/25">{data.date}</section>
          <section className="text-black/25">{data.type}</section>
          <button className="bg-danger text-white p-2 rounded-xl text-[1.2rem]">
            Cancle
          </button>
        </section>
        <section className="flex justify-between flex-col items-end text-[1.2rem]">
          <section className="font-semibold text-near_normal">
            {data.price}
          </section>
          <section>
            <ButtonIncreaseQuantityV2 />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Cart;
