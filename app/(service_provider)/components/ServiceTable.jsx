import ModalServiceDetail from "@/app/components/Modal/ModalServiceDetail";
import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import React from "react";
import ServiceProviderDropdown from "../Service Components/ServiceProviderDropdown";

const ServiceTable = ({ services, allApp }) => (
  <div className="h-full no-scrollbar">
    <div className=" w-full">
      <div className="grid grid-cols-4 gap-md_gap">
        {services.map((service, idx) => (
          <React.Fragment key={idx}>
            <div
              key={idx}
              // className="relative z-10 after:inset-0 after:content-[''] after:transition-all after:absolute after:top-0 after:left-0 after:bg-transparent after:z-[-1] hover:after:bg-bg/[.5] hover:after:scale-[1.1] after:rounded-small pop-service-card flex flex-col gap-3"
            >
              <label htmlFor={"my_modal_service" + idx} className="relative">
                <Image
                  className="object-cover h-[25rem] cursor-pointer rounded-[.8rem] object-center"
                  width={1000}
                  height={1000}
                  src={getPhoto(service?.serviceImage)}
                  alt="Service Image"
                />
                <span
                  className={`capitalize text-small_title absolute top-6 bg-white py-1 px-4 rounded-full cursor-pointer right-6 ${
                    !service.serviceStatus ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {service?.serviceStatus ? "Open" : "Closed"}
                </span>
              </label>
              <div className="flex justify-between z-99">
                <div className="flex">
                  <p className="text-mid font-semibold">
                    {service?.serviceName}
                  </p>
                </div>
                <ServiceProviderDropdown service_id={service?.serviceId} />
              </div>
            </div>
            <input
              type="checkbox"
              id={"my_modal_service" + idx}
              className="modal-toggle"
            />
            <section className="modal" role="dialog">
              <section className="modal-box max-w-[100rem]">
                <ModalServiceDetail
                  idx={idx}
                  service={service}
                  allApp={allApp}
                />
              </section>
            </section>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default ServiceTable;
