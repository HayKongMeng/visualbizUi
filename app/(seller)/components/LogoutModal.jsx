"use client";
import React from "react";
import Button from "@/app/components/Button";
import Image from "next/image";
import LogoutIcon from "./Icons/SidebarIcon/NonActive/LogoutIcon";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function LogoutModal({ color }) {
  return (
    <>
      <div
        className={`w-full rounded-xl flex  items-center  px-10  `}
        onClick={() => document.getElementById("my_modal_logout").showModal()}
      >
        <LogoutIcon />
        <section
          className={`hover:bg-white  py-5 text-center text-[1.4rem] w-full group-hover:text-black rounded-2xl ${
            color ? "text-white" : "text-black"
          }`}
        >
          Log out
        </section>
      </div>
      <dialog id="my_modal_logout" className="modal">
        <section className="modal-box max-w-[40rem]">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn  text-[1.8rem] btn-circle btn-ghost absolute right-4 top-2"
            onClick={() => document.getElementById("my_modal_logout").close()}
          >
            ✕
          </button>
          <div className="flex   gap-5   flex-col  items-center justify-between overflow-hidden">
            <div className="w-[25rem] flex justify-center items-center ">
              <Image
                src={"/svgs/out.svg"}
                width={100}
                height={100}
                alt="Add Product IMG"
              />
            </div>
            <div>
              <div className="text-red-500 text-center font-semibold text-[1.6rem]">
                Are you sure you want to Log out?
              </div>
            </div>
            <div className="flex gap-5 items-center justify-end pb-5">
              <button className="py-4 px-10 text-[1.2rem] border bg-bg rounded-2xl text-primary">
                <div onClick={()=> signOut({callbackUrl : "/login"})}>
                  Log out
                </div>
              </button>
              <button
                className="py-4 px-10 text-[1.2rem] border bg-primary text-white rounded-2xl"
                onClick={() =>
                  document.getElementById("my_modal_logout").close()
                }
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
      </dialog>
    </>
  );
}
