"use client";
import { postOrderPro } from "@/app/action/orderAction";
import { useLocationStore } from "@/app/store/locationStore";
import { useCartStore } from "@/app/store/store_product";
import Image from "next/image";
import React from "react";

const PaymentModal = ({ cartList = [] }) => {
  const { setEmpty } = useCartStore();
  const { current_user_location } = useLocationStore();

  console.table("cart List : ", cartList[0]);

  return (
    <main className=" p-10 h-[40rem]   gap-[3.2rem]">
      <section className="modal-action absolute right-[1rem] top-[-.5rem]">
        <label
          onClick={() => {
            // setEmpty();
            // postOrderPro({
            //   orderAddress: current_user_location,
            //   shop: cartList[0]?.shop,
            //   productId: cartList?.map((shop) => shop?.productId),
            //   qty: cartList?.map((shop) => shop?.quantity),
            // });
          }}
          htmlFor="my_modal_payment"
          className="cursor-pointer bg-primar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon size-[3rem] p-2 hover:duration-300 hover:bg-primary rounded-full hover:stroke-white stroke-black"
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
        </label>
      </section>
      {/* <div className="h-full overflow-hidden w-full">
        <Image
          className="w-full"
          src={"/images/khqr.png"}
          width={1000}
          height={1000}
          alt="khqr"
        />
      </div> */}
      <div>
        <div className="border-b py-6">
          <h3 className="text-semi_header">Invoice</h3>
          <div>
            <p className="flex text-normal justify-between items-center">
              <span>Total due</span>
              <span className="before:content-['$']">
                {cartList?.reduce(
                  (acc, data) => acc + data?.unitPrice * data?.quantity,
                  0
                )}
              </span>
            </p>
            <p className="flex text-normal justify-between items-center">
              <span>Transaction fee</span>
              <span className="before:content-['$']">0</span>
            </p>
            <p className="flex text-normal font-medium justify-between items-center">
              <span>Amount paid</span>
              <span className="before:content-['$']">0</span>
            </p>
          </div>
        </div>
        <div className="py-6 flex flex-col gap-6">
          <div>
            <p className="flex text-normal justify-between items-center">
              <span className="font-medium">Amount due</span>
              <span className="before:content-['$']">
                {cartList?.reduce(
                  (acc, data) => acc + data?.unitPrice * data?.quantity,
                  0
                )}
              </span>
            </p>
          </div>
          <div className="grid grid-cols-[20rem_1fr] gap-10">
            <div className="bg-red-600 p-2 rounded-2xl">
              <div className="h-[4rem]  bg-red-600 p-2 w-full  flex justify-center">
                <Image
                  src={"/images/khqrlogo.webp"}
                  width={1000}
                  height={1000}
                  alt="khqr"
                  className="w-[10rem]"
                />
              </div>
              <div className="bg-white my-qr p-2 rounded-md overflow-hidden">
                <Image
                  src={"/images/qr.png"}
                  width={1000}
                  height={1000}
                  alt="khqr"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Payment Method</h3>
                <Image
                  className="w-[20rem] h-[3rem] object-contain "
                  src={
                    "https://webill365.com/kh/asset/logo/webill365xppcbank-logo.svg"
                  }
                  width={1000}
                  height={1000}
                  alt="khqr"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Account Name</h3>
                <p className="text-xl font-semibold">024 233 324</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentModal;
