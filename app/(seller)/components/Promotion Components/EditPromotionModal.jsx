"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../../../components/Button";

const EditPromotionModal = () => {
  const [preview, setPreview] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <section>
        <div
          onClick={() =>
            document.getElementById("my_modal_editpromotion").showModal()
          }
          className="text-white"
        >
          <div>Edit</div>
        </div>
        <section>
          <dialog id="my_modal_editpromotion" className="modal">
            <div
              className="modal-box p-16 py-14 max-w-[70rem]  "
              id="hide-scrollbar"
            >
              <form method="dialog">
                <button className="absolute text-[2.5rem] right-8 top-8">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-[2rem]">Promotion</h3>
              <form action="">
                <section className="flex flex-col gap-2">
                  <section className=" flex mt-8 gap-10">
                    <div className="w-full ">
                      <label className="font-semibold text-2xl" htmlFor="title">
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="border-1 p-4 text-xl border-gray-200 w-full mt-[0.5rem] rounded-[1rem]"
                        placeholder="Happy Khmer New Year"
                        required
                      />
                    </div>
                    <section className="flex w-full flex-col gap-2 ">
                      <label
                        htmlFor="seller"
                        className="font-semibold text-2xl"
                      >
                        Percentage
                      </label>
                      <select
                        id="percentage"
                        name="percentage"
                        className="border text-xl rounded-2xl border-gray-300 mt-[0.5] w-full p-[1rem] "
                      >
                        <option className="text-xl" value="">
                          25%
                        </option>
                        <option className="text-xl" value="">
                          30%
                        </option>
                        <option className="text-xl" value="">
                          50%
                        </option>
                        <option className="text-xl" value="">
                          70%
                        </option>
                      </select>
                    </section>
                  </section>
                  <section className="flex  gap-10 mt-5">
                    <section className="w-full mt-[0.5rm] gap-10 ">
                      <label
                        className="w-[15rem] text-2xl font-semibold"
                        htmlFor=""
                      >
                        Start date
                      </label>
                      <section className="relative w-full">
                        <section className="w-[20px] absolute top-1/2 right-4 -translate-y-1/2">
                          <Image
                            src={"/svgs/calendar.svg"}
                            width={50}
                            height={50}
                            alt="shopName"
                          />
                        </section>
                        <input
                          type="date"
                          name="start_date"
                          id="start_date"
                          className="border-1 p-4 mt-[0.5rem] text-xl border-gray-200 w-full rounded-[1rem] "
                          placeholder=""
                          required
                        />
                      </section>
                    </section>
                    <section className="w-full mt-[0.5rm] gap-10 ">
                      <label
                        className="w-[15rem] text-2xl font-semibold"
                        htmlFor=""
                      >
                        End date
                      </label>
                      <section className="relative w-full">
                        <section className="w-[20px]  absolute top-1/2 right-4 -translate-y-1/2">
                          <Image
                            src={"/svgs/calendar.svg"}
                            width={50}
                            height={50}
                            alt="shopName"
                          />
                        </section>
                        <input
                          type="date"
                          name="end_date"
                          id="end_date"
                          className="border-1 p-4 mt-[0.5rem] text-xl border-gray-200 w-full rounded-[1rem] "
                          placeholder=""
                          required
                        />
                      </section>
                    </section>
                  </section>
                  <section className="flex gap-10 mt-5 ">
                    <section className="w-full mt-[0.5rm] gap-10  ">
                      <label
                        htmlFor="seller"
                        className="font-semibold text-2xl"
                      >
                        Desccrption
                      </label>
                      <input
                        type="text"
                        name="Description"
                        id="Description"
                        className="border-1 p-4 text-xl  pb-[10rem]  border-gray-200 w-full mt-[0.5rem] rounded-[1rem]"
                        placeholder="Description about your Promotion"
                        required
                      />
                    </section>
                  </section>
                  <div className="w-full flex flex-col gap-3 mt-5">
                    <label className="font-semibold text-2xl" htmlFor="price">
                      Picture
                    </label>
                    <label htmlFor="upload_cover" className="cursor-pointer">
                      <div>
                        <input
                          type="file"
                          name="profile"
                          id="upload_cover"
                          hidden
                          onChange={handleImageChange}
                        />
                        {preview ? (
                          <Image
                            className="object-cover h-[28rem] "
                            src={preview}
                            alt="Uploaded Image"
                            width={1000}
                            height={1000}
                          />
                        ) : (
                          <Image
                            src="/svgs/upload_photo.svg"
                            width={30}
                            height={30}
                            alt="Upload Icon"
                          />
                        )}
                      </div>
                    </label>
                  </div>
                </section>
                <section className="flex justify-end gap-8 text-white w-full mt-[3rem] ">
                  <Button className={" w-[16rem]"}>Select Product</Button>
                  <Button className={"w-[12rem]"}>Create</Button>
                </section>
              </form>
            </div>
          </dialog>
        </section>
      </section>
    </div>
  );
};

export default EditPromotionModal;
