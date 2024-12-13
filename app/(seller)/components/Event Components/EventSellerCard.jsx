'use client'
import Image from "next/image";
import React, { useState } from "react";
import ThreeDotted from "../Icons/ThreeDotted";
import EventSellerDropdown from "./EventSellerDropdown";
import Link from "next/link";
import { getPhoto } from "@/app/utils/util_function";
import moment from "moment";
function EventSellerCard({ data={eventTitle:""},index}) {
  return (
    // <div className='w-[30rem] border rounded-2xl'>
    <div className=" border rounded-2xl">
      <div className="relative">
        <Link href={`/seller/event/${data?.eventId}`} title="Event Details">
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
              {moment(data?.startDate).format("MMM DD YYYY")}
            </div>
            <div className="font-semibold text-[1.6rem] line-clamp-1">
              {data?.eventTitle?.length>20 ? data?.eventTitle.substring(0,25)+"..." : data?.eventTitle}
            </div>
          </div>
        </Link>
        <div className="absolute top-3 right-5 rounded-full  ">
          <EventSellerDropdown data={data} index={index}/>
        </div>
      </div>
    </div>
  );
}

export default EventSellerCard;
