import PaymentModal from "@/app/components/Modal/PaymentModal";
import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const CartDetail = ({ cartList = [] }) => {
  const [pay, setPay] = useState(-1);
  console.log("data : ", cartList);
  return (
    <main className="w-full p-10 flex flex-col gap-6 rounded-lg shadow-sm">
      <div className="flex flex-col gap-6">
        <h3 className="text-semi_header font-semibold">
          Choose Payment Method
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {payment.map((item, idx) => {
            {
              if (idx == 0)
                return (
                  <div
                    key={idx}
                    onClick={() => setPay(idx)}
                    className={`p-4  border-2 rounded-md cursor-pointer ${
                      idx == pay ? "border-2 border-black" : ""
                    }`}
                  >
                    <Image
                      src={item?.src}
                      width={1000}
                      height={1000}
                      alt="Payment"
                      className="object-contain"
                    />
                  </div>
                );
              return (
                <div
                  onClick={() => setPay(idx)}
                  className={`p-4  border-2 flex justify-center items-center gap-3 rounded-md cursor-pointer ${
                    idx == pay ? "border-2 border-black" : ""
                  }`}
                >
                  <span className="text-normal">CASH</span>
                  <CircleDollarSign className="stroke-[1.5] size-8" />
                </div>
              );
            }
          })}
        </div>
      </div>
      <h3 className="text-semi_header font-semibold">Order Summary</h3>
      <div className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <p className="text-normal font-medium">Sub Total</p>
          <p className="text-mid font-medium">
            $ {cartList?.reduce((acc, data) => acc + data?.unitPrice, 0)}
          </p>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-normal font-medium">Discount</p>
          <p className="text-mid font-medium">
            {cartList?.reduce(
              (acc, data) => (data?.discount || 0) + acc + "%",
              0
            )}
          </p>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-normal font-medium">Total</p>
          <p className="text-mid font-medium">
            ${" "}
            {cartList?.reduce(
              (acc, data) => acc + data?.unitPrice * data?.quantity,
              0
            )}
          </p>
        </div>
        <label
          htmlFor="my_modal_payment"
          className="small-btn text-center hover:bg-primary/[.8] cursor-pointer bg-primary w-full text-white rounded-full"
        >
          Checkout
        </label>
        <input type="checkbox" id="my_modal_payment" className="modal-toggle" />
        <section className="modal" role="dialog">
          <section className="modal-box max-w-[60rem] !h-[60rem]">
            <PaymentModal cartList={cartList} />
          </section>
        </section>
      </div>
    </main>
  );
};

export default CartDetail;

const payment = [
  {
    title: "WeBill365",
    src: "https://webill365.com/kh/asset/logo/webill365xppcbank-logo.svg",
  },
  {
    title: "Cash",
    // src: "https://webill365.com/kh/asset/logo/webill365xppcbank-logo.svg",
  },
];
