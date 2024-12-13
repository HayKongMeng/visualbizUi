import Image from "next/image";
import React from "react";
import ThreeDotted from "../Icons/ThreeDotted";
import ServiceServiceProviderDropdown from "./ServiceProviderDropdown";
import Link from "next/link";

function ServiceServiceProviderCard({ data }) {
  return (
    // <div className='w-[30rem] border rounded-2xl'>
    <div className=" border rounded-2xl">
      <div className="relative">
        <Link href={`/service-provider/event-management/${data.id}`} title="Service Details">
          <div className=" h-[25rem]">
            <Image
              src={data.event_img}
              className="rounded-2xl"
              alt="Service-Img"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col p-5 gap-5">
            <div className="w-[10rem] text-center rounded-full border bg-bg text-[1rem] px-3 py-1">
              {data.date}
            </div>
            <div className="font-semibold text-[1.6rem]">{data.title}</div>
          </div>
        </Link>
        <div className="absolute top-3 right-5 rounded-full  ">
          <ServiceServiceProviderDropdown />
        </div>
      </div>
    </div>
  );
}

export default ServiceServiceProviderCard;
