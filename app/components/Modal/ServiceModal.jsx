"use client";
import Image from "next/image";

import React from "react";
import StoreToCartButton from "../Buttons/StoreToCartButton";
import { getPhoto, setToast } from "@/app/utils/util_function";
import { DatePicker } from "@nextui-org/date-picker";
import { useCartStore } from "@/app/store/store_product";
import { useOrderCountStore } from "@/app/store/orderCount";
import { useState } from "react";
import { useServiceStore } from "@/app/store/serviceStore";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { bookServiceAction } from "@/app/action/bookAction";

const ServiceModal = ({ idx, service_id, service }) => {
  const { storeToCart } = useCartStore();
  const { setOrderCount } = useOrderCountStore();
  const { setServiceList, serviceList } = useServiceStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [count, setCount] = useState(0);
  const onSubmit = async (data) => {
    if (count <= 0) {
      bookServiceAction({
        shop: service_id,
        serviceId: [service?.serviceId],
        startDate: [data?.startDate],
        endDate: [data?.endDate],
      });
      // storeToCart(service);
      setServiceList();
      setCount(count + 1);
      setOrderCount();
      setToast("success", "🤩 Service has been booked");
      reset();
    } else {
      setToast("error", "🫣 Service is already booked");
    }
  };
  return (
    <main className="grid grid-cols-2 p-6 h-[60rem]   no-scrollbar gap-[3.2rem]">
      <section className="modal-action absolute right-[1rem] top-[-.5rem]">
        <label htmlFor={"my_modal_" + idx} className="cursor-pointer bg-primar">
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
      <section className="gri h-full grid-rows- gap-[2rem] overflow-hidden">
        <div className="h-full overflow-hidden">
          <Image
            width={1000}
            height={1000}
            alt={service?.productName || service?.serviceDetails?.serviceName}
            priority
            src={`${getPhoto(
              service?.serviceImage || service?.serviceDetails?.serviceImg
            )}`}
            className="!h-full w-full rounded-small  duration-300"
          />
        </div>
      </section>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-big_header">
          {service?.serviceName || service?.serviceDetails?.serviceName}
        </h3>

        <section>
          <p className="text-normal text-secondary font-bold">
            $ {service?.servicePrice}
          </p>
        </section>
        <section className="flex flex-col gap-[2rem]">
          <section className="grid grid-cols-[10rem_1fr] items-end gap-[3rem]">
            <p className="text-mid font-medium">Category</p>
            <p className="text-mid capitalize">
              {service?.category?.categoryName ||
                service?.serviceDetails?.category.categoryName}
            </p>
          </section>
          {service?.discount && (
            <section className="grid grid-cols-[10rem_1fr] items-end gap-[3rem]">
              <p className="text-mid font-medium">Discount</p>
              <p className="text-mid">{service?.discount}%</p>
            </section>
          )}
          <section className="grid grid-cols-[10rem_1fr] items-end gap-[3rem]">
            <p className="text-mid font-medium">Start</p>
            <input
              {...register("startDate", { required: true })}
              type="datetime-local"
              className="relative w-full text-mid border focus:outline-none rounded-[.5rem] py-[.5rem] px-[2rem] input input-bordered"
            />
          </section>
          <section className="grid grid-cols-[10rem_1fr] items-end gap-[3rem]">
            <p className="text-mid font-medium">End</p>
            <input
              {...register("endDate", { required: true })}
              type="datetime-local"
              className="relative w-full text-mid border focus:outline-none rounded-[.5rem] py-[.5rem] px-[2rem] input input-bordered"
            />
          </section>
          {/* <section className="grid grid-cols-[10rem_1fr] items-end gap-[3rem]">
            <p className="text-[1.4rem] font-semibold">From</p>
            <select className="w-full text-mid border focus:outline-none rounded-[.5rem] max-w-xs py-[.5rem] px-[2rem]">
              <option disabled selected>
                Start from time
              </option>
              {scheduleTimes.map((time, idx) => (
                <option key={time.key} value={2 * (idx + 1) + "AM"}>
                  {2 * (idx + 1) + ":00 AM"}
                </option>
              ))}
            </select>
          </section>
          <section className="grid grid-cols-[10rem_1fr] items-end gap-[3rem]">
            <p className="text-[1.4rem] font-semibold">To</p>
            <select className="w-full text-mid border focus:outline-none rounded-[.5rem] max-w-xs py-[.5rem] px-[2rem]">
              <option disabled selected>
                End time
              </option>
              {scheduleTimes.map((time, idx) => (
                <option key={time.key} value={2 * (idx + 1) + "AM"}>
                  {2 * (idx + 1) + ":00 PM"}
                </option>
              ))}
            </select>
          </section> */}
          <section className="grid grid-cols-[10rem_1fr] items-start gap-[3rem]">
            <p className="text-mid font-semibold">Description</p>
            <p className="text-mid">
              {service?.serviceDescription ||
                service?.serviceDetails?.serviceDescription}
            </p>
          </section>
        </section>
        <section className=" mt-auto">
          <section className="flex justify-end w-full">
            <button type="submit" className="flex gap-4">
              <label
                // onClick={handleClick}
                htmlFor={"my_modal_" + idx}
                className=" bg-primary cursor-pointer small-btn rounded-small text-white"
              >
                Book Now
              </label>
              {/* <StoreToCartButton data={service} type="service" /> */}
            </button>
          </section>
        </section>
      </form>
    </main>
  );
};

export default ServiceModal;

const scheduleTimes = [
  {
    key: "first_opt",
    label: "8AM-10AM",
  },
  {
    key: "second_opt",
    label: "10AM-12PM",
  },
  {
    key: "third_opt",
    label: "12PM-2PM",
  },
];
