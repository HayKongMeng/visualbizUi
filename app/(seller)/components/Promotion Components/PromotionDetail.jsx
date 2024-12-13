import Image from "next/image";
import React from "react";
import moment from "moment";
import { getPhoto } from "@/app/utils/util_function";
const PromotionDetail = ({ data, idx }) => {
  return (
    <div>
      <div
        className="cursor-pointer"
        onClick={() =>
          document.getElementById("my_modal_Promotion" + idx).showModal()
        }
      >
        <div className="flex flex-col p-5 gap-5 bg-white rounded-b-2xl h-[20rem] ">
          <div className="font-semibold text-[1.6rem] ">
            {data.promotiontitle}
          </div>
          <div className="h-[10rem] ">{data.promotionDescription}</div>
          <div className="w-[8rem] text-center rounded-full border bg-bg text-[1rem] px-3 py-1">
            {moment(data?.startDate).format("MMM DD YYYY")}
          </div>
        </div>
      </div>
      <section>
        <dialog id={"my_modal_Promotion" + idx} className="modal">
          <div className="modal-box max-w-[70rem] ">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost text-[2rem] absolute right-5 top-5">
                ✕
              </button>
            </form>
            <section className="flex h-[40rem]  justify-between gap-10 ">
              <section className="w-[35%]">
                <Image
                  className="rounded-lg"
                  src={getPhoto(data?.promotionImage)}
                  width={1000}
                  height={1000}
                  alt="shopName"
                />
              </section>
              <section className="w-[65%] flex flex-col gap-6">
                <p className="font-semibold text-[2.2rem] t-[1rem]">
                  {" "}
                  {data.promotiontitle}
                </p>
                <p className="text-[1.4rem]">{data.promotionDescription}</p>
                <section className="flex justify-between text-[2.2rem] font-semibold  ">
                  <p className="">Products Promotion</p>
                  <p className="text-green-700 pr-6">{data.percentage + "%"}</p>
                </section>
                <section
                  id="hide-scrollbar"
                  className=" w-full h-96  flex flex-nowrap overflow-x-auto space-x-4"
                >
                  <section className="bg-white flex-shrink-0 shadow-md h-72  w-60  p-4 rounded-xl ">
                    <div className="flex flex-col gap-4">
                      <Image
                        className="rounded-lg w-56 h-44"
                        src={getPhoto(data?.promotionImage)}
                        width={1000}
                        height={1000}
                        alt="shopName"
                      />
                      <p className="text-center text-[1rem]">
                        {" "}
                        Rice fray with sea food{" "}
                      </p>
                      <div className="flex justify-between">
                        <p>2/02/2024</p>
                        <div className="flex gap-1">
                          <p>25%</p>
                        </div>
                      </div>
                    </div>
                  </section>

                </section>
                <section className="flex justify-between ">
                  <div className="flex gap-2">
                    <p className="font-semibold">Start:</p>
                    <p>{moment(data?.startDate).format("MMM DD YYYY")}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="font-semibold">End:</p>
                    <p>{moment(data?.endDate).format("MMM DD YYYY")}</p>
                  </div>
                </section>
              </section>
            </section>
          </div>
        </dialog>
      </section>
    </div>
  );
};

export default PromotionDetail;
