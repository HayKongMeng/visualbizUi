"use client";
import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import SellerInput from "../Input/SellerInput";
import SellerTextArea from "../Input/SellerTextArea";
import ImageUploadInput from "../ImageUploadInput";

export default function SellerProductManuallyRestockModal() {
  return (
    <>
      <div
        className=" text-[1.2rem]"
        onClick={() => document.getElementById("my_modal_manually").showModal()}
      >
        Manually add Product
      </div>
      <dialog id="my_modal_manually" className="modal">
        <div className="modal-box max-w-[40rem]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn  text-[1.8rem] btn-circle btn-ghost absolute right-4 top-2">
              ✕
            </button>
          </form>
          <div className="flex px-[5rem] py-[5rem] flex-col justify-center items-center gap-8">
            <div className="w-[20rem] rounded-xl bg-bg py-10 ">
              <Image
                className="w-[15rem] mx-auto p-5 py-10"
                src={"/svgs/restock.svg"}
                width={1000}
                height={1000}
                alt="Update Product IMG"
              />
            </div>
            <div className="text-[1.8rem] font-semibold"> Coca</div>
            <SellerInput type="number" placeHolder="1" />
            <Button className={"text-white"}>Import</Button>
          </div>
        </div>
      </dialog>
    </>
  );
}
