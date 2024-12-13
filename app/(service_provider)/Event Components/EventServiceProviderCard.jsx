// "use client"
import Image from "next/image";
import React from "react";
import EventServiceProviderDropdown from "./EventServiceProviderDropdown";
import Link from "next/link";
import { getPhoto } from "@/app/utils/util_function";

function EventServiceProviderCard({ data }) {
  console.log(data);
  return (
    // <div className='w-[30rem] border rounded-2xl'>
    <div className=" border rounded-2xl">
      <div className="relative">
        <Link
          href={`/service-provider/event-management/${data?.id}`}
          title="Event Details"
        >
          <div className=" h-[25rem]">
            <Image
              src={getPhoto(data?.eventImage)}
              className="rounded-2xl"
              alt="Event-Img"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col p-5 gap-5">
            <div className="w-[10rem] text-center rounded-full border bg-bg text-[1rem] px-3 py-1">
              {new Date(data?.startDate).toDateString()}
            </div>
            <div className="font-semibold text-[1.6rem]">
              {data?.eventTitle}
            </div>
          </div>
        </Link>
        <div className="absolute top-3 right-5 rounded-full  ">
          <EventServiceProviderDropdown data={data} />
        </div>
      </div>
    </div>
  );
}

export default EventServiceProviderCard;
