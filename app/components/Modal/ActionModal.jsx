import { getBookById } from "@/app/services/book.service";
import { getOrderById } from "@/app/services/order.service";
import { getPhoto } from "@/app/utils/util_function";
import { FileDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const ActionModal = async ({
  type = "product" || "service",
  data,
  idx,
  history = false,
  mixed = false,
}) => {
  let getOrder = [];

  if (!mixed) {
    if (type == "product") {
      const orders = await getOrderById(data?.orderId || data?.id);
      getOrder = { ...orders };
    } else if (type == "history") {
      const orders = await getOrderById(data?.id);
      getOrder = { ...orders };
    } else if (type == "book") {
      const book = await getBookById(data?.id);
      getOrder = { ...book };
    } else if (data?.shopTypeId == 2 && !type) {
      const book = await getBookById(data?.id);
      getOrder = { ...book };
    }
  } else {
    if (data?.shopTypeId == 2) {
      const book = await getBookById(data?.id);
      getOrder = { ...book };
    } else {
      const orders = await getOrderById(data?.id);
      getOrder = { ...orders };
    }
  }

  // const data = await ge

  console.log("order list : ", data?.id, getOrder);

  return (
    <main className=" px-10 py-md_paddding grid grid-rows-[auto_1fr_auto]  h-[60rem] gap-[3.2rem]">
      <section className="modal-action absolute right-[1rem] top-[-.5rem]">
        <label
          htmlFor={"my_modal_action" + idx}
          className="cursor-pointer bg-primar"
        >
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
      <section className="header-order py-6 border-b flex justify-between w-full items-start">
        <div className="flex flex-col gap-6">
          <h3 className="text-normal font-medium">
            Order id #{data?.orderId || data?.id || data?.bookId}
          </h3>
          <p className="text-mid flex items-center gap-4">
            <span>Order date </span>
            <span className="font-semibold">
              {new Date(
                data?.orderDate ||
                  data?.bookingDate ||
                  data?.date ||
                  data?.startDate
              ).toDateString()}
            </span>
          </p>
        </div>

        {history && (
          <div>
            <button className="py-2 px-6 flex gap-2 items-center text-normal border font-light rounded-full">
              <FileDown className="size-6" />
              Invoice
            </button>
          </div>
        )}
      </section>
      {type !== "book" && (
        <section className="list-order flex flex-col gap-6">
          {getOrder?.productList?.map((order, idx) => (
            <main key={idx} className="grid grid-cols-[auto_1fr] gap-6">
              <Image
                alt="product order"
                src={getPhoto(order?.productImg)}
                width={1000}
                height={1000}
                priority
                className="size-[12rem] rounded-small"
              />
              <section className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-[1.8rem] font-semibold">
                    {order?.productName}
                  </h3>
                  <p className="text-mid font-medium text-red-500">
                    $ {order?.unitPrice}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  {/* <p className="text-near_normal">Keychrone Mechanic</p> */}
                  {order?.qty && (
                    <p className="text-mid font-semibold flex gap-6">
                      Quantity <span>{order?.qty}</span>
                    </p>
                  )}
                </div>
              </section>
            </main>
          ))}
        </section>
      )}

      {type == "book" && (
        <main className="grid grid-cols-[auto_1fr] gap-6">
          <Image
            alt="product order"
            src={getPhoto(data?.serviceImage || data?.image)}
            width={1000}
            height={1000}
            priority
            className="size-[12rem] rounded-small"
          />
          <section className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[1.8rem] font-semibold">
                {data?.serviceName}
              </h3>
              <p className="text-mid font-medium text-red-500">
                $ {data?.servicePrice}
              </p>
            </div>
            <div className="flex flex-col justify-between items-start gap-3">
              <p className="flex items-center gap-3 text-mid border rounded-full py-1 px-4 transition-all">
                <span className="font-medium underline cursor-pointer">
                  {new Date(data?.startDate).toDateString()}
                </span>
                <span>at</span>
                <span className="font-medium underline cursor-pointer">
                  {new Date(data?.startDate).toLocaleTimeString()}
                </span>
              </p>
              <p className="flex items-center gap-3 text-mid border rounded-full py-1 px-4 transition-all">
                <span className="font-medium underline cursor-pointer">
                  {new Date(data?.endDate).toDateString()}
                </span>
                <span>at</span>
                <span className="font-medium underline cursor-pointer">
                  {new Date(data?.endDate).toLocaleTimeString()}
                </span>
              </p>
            </div>
          </section>
        </main>
      )}
      <section className="qr-payment grid grid-cols-3 py-6 border-t">
        <div className="flex flex-col gap-2">
          <p className="text-normal font-medium">Payment</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon size-[7rem]"
            viewBox="0 0 512 512"
          >
            <rect x="336" y="336" width="80" height="80" rx="8" ry="8" />
            <rect x="272" y="272" width="64" height="64" rx="8" ry="8" />
            <rect x="416" y="416" width="64" height="64" rx="8" ry="8" />
            <rect x="432" y="272" width="48" height="48" rx="8" ry="8" />
            <rect x="272" y="432" width="48" height="48" rx="8" ry="8" />
            <rect x="336" y="96" width="80" height="80" rx="8" ry="8" />
            <rect
              x="288"
              y="48"
              width="176"
              height="176"
              rx="16"
              ry="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <rect x="96" y="96" width="80" height="80" rx="8" ry="8" />
            <rect
              x="48"
              y="48"
              width="176"
              height="176"
              rx="16"
              ry="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <rect x="96" y="336" width="80" height="80" rx="8" ry="8" />
            <rect
              x="48"
              y="288"
              width="176"
              height="176"
              rx="16"
              ry="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-normal font-medium">Delivery</p>
          <div className="flex flex-col gap-4">
            <p className="text-mid">Address</p>
            <p className="text-mid capitalize">
              {getOrder?.orderAddress || "Unknow Location"}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <p className="text-normal font-medium">Total</p>
          <div className="flex flex-col gap-4">
            <p className="text-mid text-red-500 font-medium">
              $ {getOrder?.totalAmount || data?.servicePrice}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActionModal;
