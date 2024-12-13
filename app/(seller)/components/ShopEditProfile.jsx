"use client";
import React from "react";
import Button from "@/app/components/Button";
import Image from "next/image";
import LogoutIcon from "./Icons/SidebarIcon/NonActive/LogoutIcon";
import SellerInput from "./Input/SellerInput";

export default function ShopEditProfile() {
  return (
    <>
      <div
        className=" w-full rounded-xl flex  items-center  px-10  "
        onClick={() => document.getElementById("my_modal_editprofile").showModal()}
      >
        <div className=" text-[1.4rem] text-primary border px-10 py-2 rounded-2xl">
          Edit
        </div>
      </div>
      <dialog id="my_modal_editprofile" className="modal">
        <div className="modal-box max-w-[60rem]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn  text-[1.8rem] btn-circle btn-ghost absolute right-4 top-2">
              ✕
            </button>
          </form>
          <div className=" flex gap-[10rem] px-20  items-center justify-center overflow-y-auto">
            <div
              id="hide-scrollbar"
              className="flex flex-col gap-5 justify-start w-full  py-5"
            >
              <div className="font-semibold text-[1.8rem] text-center mb-5">
                Edit Shop Profile
              </div>
              <div className="w-full gap-5">
                <SellerInput placeholder={"Shop Name"} label={"Shop Full Name"} />
              </div>
              <div className="w-full gap-5">
                <SellerInput placeholder={"Email"} label={"Email"} />
              </div>
              <div className="w-full gap-5">
                <SellerInput placeholder={"Phone"} label={"Phone"} />
              </div>
              <div className="flex gap-5 items-center justify-end ">
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
