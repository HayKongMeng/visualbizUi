"use client";
import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import OrderAcceptModal from "./OrderAcceptModal";
import OrderDenyModal from "./OrderDenyModal";
import { getPhoto } from "@/app/utils/util_function";

function OrderCard({ order, idx }) {
  const handleAcceptOrder = async () => {
    try {
      const result = await acceptOrder(orderId);
      console.log("Order accepted:", result);
    } catch (error) {
      console.error("Error accepting order:", error);
    }
  };

  const handleDenyOrder = async () => {
    try {
      const result = await denyOrder(orderId); 
      console.log("Order denied:", result);
    } catch (error) {
      console.error("Error denying order:", error);
    }
  };
  return (
    <label
      htmlFor={"my_modal_action" + idx}
      className="p-5 border border-bg cursor-pointer w-full bg-bg rounded-xl"
    >
      <div className="flex gap-5">
        <div className="w-[10rem] ">
          <Image
            src={getPhoto(order.img)}
            alt="Order-img"
            className="rounded-2xl"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-start justify-around">
            <div className="text-[1.4rem]">{new Date(order?.date).toDateString()}</div>
            <div className="flex flex-col items-start gap-2">
              <div className="font-bold text-[1.6rem]">
                Order id {order?.id || order?.orderId}
              </div>
              <div className="font-semibold text-[1.6rem]">{order?.name || order?.shopName}</div>
              <div className="text-[1.4rem]">{order?.address || order?.orderAddress}</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="text-near_normal">Total : {order?.total || order?.totalAmount}</div>
            <div className="flex gap-4">
              <OrderAcceptModal onAccept={handleAcceptOrder}/>
              <OrderDenyModal onDeny={handleDenyOrder}/>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}

export default OrderCard;
