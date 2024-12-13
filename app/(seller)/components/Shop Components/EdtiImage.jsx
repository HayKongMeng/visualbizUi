"use client";
import React from "react";
import ImageUploadInput from "../ImageUploadInput";
import Image from "next/image";
import EditIcon from "../Icons/EditIcon";

export default function EditImage() {
  return (
    <>
      <div
        className=" w-full rounded-xl flex  items-center  px-10  "
        onClick={() =>
          document.getElementById("my_modal_editcover").showModal()
        }
      >
        <div className=" text-[1.2rem] bg-white border-2 text-primary  p-4 absolute bottom-2 left-[15rem] cursor-pointer  rounded-full flex items-center gap-4">
        <EditIcon/>
        </div>
      </div>
      <dialog id="my_modal_editcover" className="modal">
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
                Edit Shop Image
              </div>{" "}
              <div className="w-full h-[25rem] rounded-xl">
                <Image
                  src={"/images/eventseller.jpg"}
                  alt="Shop img"
                  className="rounded-2xl"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full gap-5">
                <ImageUploadInput />
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
