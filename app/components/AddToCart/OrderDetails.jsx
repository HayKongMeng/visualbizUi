import Button from "@/app/components/Button";
import { useCartStore } from "@/app/store/store_product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

function OrderDetails({ cartData, isOpen }) {
  const { setEmpty } = useCartStore();
  console.log(cartData);
  function handleToast() {
    toast.success("Your order has been placed! 🥰", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
    setEmpty();
    isOpen(false);
  }
  return (
    <div className="flex flex-col gap-8 text-near_normal">
      {/* <div className="font-semibold">Pricing Details</div> */}
      <div className="px-5 flex flex-col gap-8">
        <div className="font-semibold">Payments Method</div>
        <div className="flex gap-5   flex-wrap">
          <div className="w-[180px] p-5 border border-primary rounded-xl cursor-pointer">
            <Image
              src={
                "https://webill365.com/kh/asset/logo/webill365xppcbank-logo.svg"
              }
              width={1000}
              height={1000}
              alt="Payment"
            />
          </div>
        </div>

        <div className="w-full border"></div>
        <div className="flex justify-between">
          <div className="font-bold">Total</div>
          <div className="font-semibold">
            ${cartData.reduce((acc, data) => data?.unitPrice + acc, 0)}
          </div>
        </div>
        <div>
          <Button onClick={handleToast}>Checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
