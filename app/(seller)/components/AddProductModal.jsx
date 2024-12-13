"use client";
import React from "react";
import { DateInput, DatePicker, useDisclosure } from "@nextui-org/react";
import Button from "@/app/components/Button";
import CloseIcon from "./Icons/CloseIcon";
import Image from "next/image";
import AuthInput from "@/app/(authentication)/components/AuthInput";
import SellerInput from "./Input/SellerInput";
import SellerTextArea from "./Input/SellerTextArea";
import UploadIcon from "./Icons/UploadIcon";
import ImageUploadInput from "./ImageUploadInput";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

export default function AddProductModal() {
  const [selected, setSelected] = useState();  
  return (
    <>
      <Button
        className="text-white text-[1.2rem] px-10 py-3"
        onClick={() => document.getElementById("my_modal_add").showModal()}
      >
        {" "}
        + Add Product
      </Button>
      <dialog id="my_modal_add" className="modal">
        <div className="modal-box max-w-[120rem]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn  text-[1.8rem] btn-circle btn-ghost absolute right-4 top-2">
              ✕
            </button>
          </form>
          <div className=" flex gap-[10rem] px-20  items-center justify-center overflow-y-auto">
            <div className="w-[70rem] flex justify-center items-center overflow-y-auto">
              <Image
                src={"/svgs/restock.svg"}
                width={100}
                height={100}
                alt="Update Product IMG"
              />
            </div>
            <div
              id="hide-scrollbar"
              className="flex flex-col gap-5 justify-start w-full h-[65rem] overflow-y-scroll py-5"
            >
              <div className="font-semibold text-[1.8rem] text-center mb-5">
                Add Products
              </div>
              <div className="flex  w-full gap-5">
                <SellerInput placeholder={"Product"} label={"Product Name"} />
                <SellerInput placeholder={"Barcode"} label={"Scan Bar Code"} />
              </div>
              <div className="flex  w-full gap-5">
                <SellerInput placeholder={"Category"} label={"Category"} />

                {/* <DayPicker mode="single" selected={selected} onSelect={setSelected}/> */}
              </div>
              <div className="flex  w-full gap-5">
                <SellerInput placeholder={"Quantity"} label={"Quantity"} />
                <SellerInput placeholder={"Price"} label={"Price"} />
              </div>
              <SellerTextArea
                placeholder={"Description"}
                label={"Description"}
              />
              <div className="w-full">
                <div className="mb-5">Product Images</div>
                <div className="flex gap-5 overflow-x-scroll ">
                  {Array.from({ length: 5 }).map((arr) => (
                    <div
                      key={arr}
                      className="w-[15rem] border flex flex-shrink-0 flex-col bg-white p-4 rounded-xl"
                    >
                      <div
                        className="w-[15px] cursor-pointer  self-end justify-end items-end"
                        title="Close Modal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ionicon"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M368 368L144 144M368 144L144 368"
                          />
                        </svg>
                      </div>
                      <Image
                        src="/svgs/mac.svg"
                        width={50}
                        height={50}
                        alt="Product-img"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <ImageUploadInput />

              <div className="flex gap-5 items-center justify-end pb-10">
                <form method="dialog">
                  <button className="py-4 px-10 text-[1.2rem] border bg-bg rounded-2xl text-primary">
                    Discard
                  </button>
                </form>

                <button className="py-4 px-10 text-[1.2rem] border bg-primary text-white rounded-2xl">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
