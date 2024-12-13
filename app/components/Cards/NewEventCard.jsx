import Image from "next/image";
import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import { MapPin } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { getPhoto } from "@/app/utils/util_function";

const NewEventCard = ({
  event,
  link = "#",
  type = "shop" || "service",
  isInShop = false,
}) => {
  return (
    <main className="flex flex-col hover:scale-[1.05] gap-4 rounded-3xl relative transition-all group bg-white shadow-md  overflow-hidden">
      <Bookmark
        size={28}
        className="bg-white/[.9] flex items-center backdrop-blur-sm z-10  absolute cursor-pointer top-4 right-4 rounded-full p-2"
      />

      <Link href={link} className="relative after:rounded-3xl ">
        <Image
          src={getPhoto(event.eventImage)}
          width={1000}
          height={1000}
          alt="pf user"
          className="w-full h-[20rem] object-cover rounded-3xl relative drop-shadow-xl"
        />
      </Link>
      <div className="grid grid-cols-[auto_auto_1fr] items-center py-6 px-8">
        {/* <div className="flex flex-col items-center">
          <span className="text-gray-700  text-[2.2rem]">May</span>
          <span className="text-[3rem] -mt-3 font-semibold">23</span>
        </div>
        <div className="w-[.1rem] bg-gray-300 h-[80%] rounded-full"></div> */}
        <div>
          <div className="flex flex-col gap-1">
            <p className="text-[2rem] text-primary font-semibold">
              {event.eventTitle}
            </p>
            <div className="flex items-center gap-3">
              <MapPin className="size-6 stroke-primary" />
              <p className="text-mid text-primary">{event?.eventAdress ? event.eventAdress : "Phnom Penh"}</p>
            </div>

            <div className="flex gap-3 items-center">
              <CalendarDays className="size-6 stroke-primary" />
              <p className="text-mid text-primary">{event.startDate}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewEventCard;
