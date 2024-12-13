import { getAllAppointmentInShopByServiceId } from "@/app/services/service.service";
import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import React from "react";

const ModalServiceDetail =async ({ service, idx ,allApp, allAppServiceId}) => {
  const appointments = await getAllAppointmentInShopByServiceId(service?.serviceId)
  return (
    <main className=" p-6  h-[60rem] gap-[3.2rem]">
      <section className="modal-action absolute right-[1rem] top-[-.5rem]">
        <label
          htmlFor={"my_modal_service" + idx}
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
      <section className="grid grid-rows-[auto_1fr] h-full gap-6 w-full">
        <h3 className="text-semi_header font-medium flex gap-6 items-center">
          {service.serviceName}{" "}
          <span
            className={`text-small_title border py-1 px-4 rounded-full ${
              !service.serviceStatus ? "text-red-500" : "text-green-500"
            }`}
          >
            {service?.serviceStatus ? "Open" : "Closed"}
          </span>
        </h3>
        <section className=" overflow-y-scroll no-scrollbar">
          <div className="grid grid-cols-[30rem_1fr] gap-md_gap">
            <div className="flex flex-col gap-3 sticky top-0 h-fit">
              <Image
                className="object-cover h-[30rem] rounded-small object-center"
                width={1000}
                height={1000}
                src={getPhoto(service?.serviceImage)}
                alt="Service Image"
              />
              <p className="flex text-mid font-medium items-center gap-3">
                Price <span>{service?.servicePrice}</span>
              </p>
              <p className="flex text-mid font-medium items-center gap-3">
                Total Request <span>{appointments?.length}</span>
              </p>
            </div>
            <div className="grid grid-rows-[auto_1fr] overflow-y-scroll gap-6">
              <p className="sticky top-0">Appointment Request</p>
              <div className="">
                <div className="overflow-x-auto">
                  <table className="w-full table-xs">
                    <thead>
                      <tr>
                        <th className="text-mid font-medium py-6 px-4 text-left">
                          No.
                        </th>
                        <th className="text-mid font-medium py-6 px-4 text-left">
                          Name
                        </th>
                        <th className="text-mid font-medium py-6 px-4 text-left">
                          Date
                        </th>
                        <th className="text-mid font-medium py-6 px-4 text-left">
                          Time
                        </th>
                        <th className="text-mid font-medium py-6 px-4 text-center">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments?.map((item, idx) => (
                        <tr key={idx} className="odd:bg-bg/[.5]">
                          <th className="text-mid py-6 px-4">{idx + 1}</th>
                          <td className="text-mid py-6 px-4">
                            {item?.username}
                          </td>
                          <td className="text-mid py-6 px-4">{new Date(item?.startDate).toDateString()}</td>
                          <td className="text-mid py-6 px-4">{new Date(item?.startDate).toLocaleTimeString()}</td>
                          <td className="text-small_title py-6 px-4 flex items-center justify-center">
                            <span
                              className={`border py-[.2rem] px-6 rounded-full ${
                                item?.status == 2
                                  ? " text-green-500 border-green-500"
                                  : item?.status == 1
                                  ? " text-secondary border-secondary"
                                  : " text-red-500 border-red-500"
                              }`}
                            >
                              {item?.status == 1 ? "Waiting" : item?.status == 2 ? "Accepted" : "Denied"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ModalServiceDetail;
