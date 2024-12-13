import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import React from "react";

const HistoryCard = ({ type = "product" | "service", data, idx }) => {
  return (
    <label
      htmlFor={"my_modal_action" + idx + "history"}
      className="p-4 relative after:content-[''] cursor-pointer after:inset-0 after:absolute hover:after:bg-bg after:z-[-1] after:rounded-small hover:border-transparent after:duration-300 hover:after:scale-x-[1.01] hover:after:scale-y-[1.03] grid grid-cols-[auto_1fr] gap-6 border rounded-small"
    >
      <Image
        src={getPhoto(data?.image)}
        width={1000}
        height={1000}
        alt="img of order"
        priority
        className="size-[10rem] rounded-small"
      />
      <main className="flex justify-between">
        <section className="flex flex-col justify-between">
          <div>
            <h3 className="text-normal font-semibold">{data?.name}</h3>
            <p className="text-mid font-medium">
              Order date , {new Date(data?.date).toDateString()}
            </p>
            <p className="text-mid font-medium">Order id #{data?.id}</p>
          </div>
          <p className="text-mid font-semibold">Amount $ {data?.totalAmount}</p>
        </section>
        <section className="flex flex-col items-end justify-end">
          <p
            className={`capitalize ${
              !data?.price && "mt-auto"
            } py-1 px-4 ${getStatus(
              data?.status
            )} rounded-md text-mid font-medium`}
          >
            {data?.status}
          </p>
        </section>
      </main>
    </label>
  );
};

export default HistoryCard;

const getStatus = (status) => {
  if (status == "Done") return "bg-[#C7FFB9]";
  if (status == "Waiting") return "bg-[#FCDE8E]";
  if (status == "delivering") return "bg-emerald-200";

  if (status == "cancel") return "bg-danger text-white";
};
