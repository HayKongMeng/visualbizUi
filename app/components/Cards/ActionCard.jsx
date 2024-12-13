import { getUnsplashUrl } from "@/app/data/dummy_shop_data";
import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import React from "react";

const ActionCard = ({ type = "product" | "service", data, idx }) => {
  return (
    <label
      htmlFor={"my_modal_action" + idx}
      className="p-4 cursor-pointer relative after:content-[''] after:inset-0 after:absolute hover:after:bg-bg after:z-[-1] after:rounded-small hover:border-transparent after:duration-300 hover:after:scale-x-[1.01] hover:after:scale-y-[1.03] grid grid-cols-[auto_1fr] gap-6 border rounded-small"
    >
      <Image
        src={getPhoto(data?.image || data?.serviceImage)}
        width={1000}
        height={1000}
        alt="img of order"
        priority
        className="size-[10rem] rounded-small"
      />
      <main className="flex justify-between">
        <section className="flex flex-col justify-between">
          <div>
            <h3 className="text-normal font-semibold">
              {data?.name || data?.serviceName}
            </h3>
            <p className="text-mid font-semibold">
              Order date{" "}
              {new Date(data?.orderDate || data?.startDate).toDateString()}
            </p>
            <p className="text-mid">
              Order id{" "}
              <span className="font-semibold">
                #{data?.orderId || data?.bookId}
              </span>
            </p>
          </div>
          {/* <p className="text-mid">Quantity {data?.qty}</p> */}
        </section>
        <section className="flex flex-col items-end justify-between">
          {data?.price && (
            <h3 className="text-normal text-danger font-semibold">
              $ {data?.price}
            </h3>
          )}
          {type !== "book" ? (
            <p
              className={`capitalize ${
                !data?.price && "mt-auto"
              } py-1 px-4 ${getStatus(
                data?.status || data?.status?.statusType || "waiting"
              )} rounded-md text-mid font-medium`}
            >
              {data?.status}
            </p>
          ) : (
            <p
              className={`capitalize mt-auto py-1 px-4 ${getStatus(
                data?.status?.statusType || "waiting"
              )} rounded-md text-mid font-medium`}
            >
              {data?.status?.statusType}
            </p>
          )}
        </section>
      </main>
    </label>
  );
};

export default ActionCard;

const getStatus = (status) => {
  if (status == "Done") return "bg-[#C7FFB9]";
  if (status == "Accept") return "bg-[#C7FFB9]";

  if (status == "Waiting") return "bg-[#FCDE8E]";
  if (status == "Delivery") return "bg-[#C7FFB9]";

  if (status == "Cancel") return "bg-danger text-white";
};
