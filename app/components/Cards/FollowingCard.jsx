import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import Link from "next/link";

export function EventCardV3({ event_data = {}, link }) {
  return (
    <div className="">
      <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border shadow-sm border-zinc-100">
        <div className="w-full  bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
          <Link href={link}>
            <Image
              src={getPhoto(
                event_data?.eventImage || event_data?.eventDetails?.eventImg
              )}
              alt="thumbnail"
              width={1000}
              height={1000}
              className={` transform object-cover h-[25rem] transition duration-200  `}
            />
          </Link>
        </div>
        <div className="px-6 py-10">
          <h2 className="font-bold capitalize text-normal text-zinc-700">
            {event_data?.eventTitle
              ? event_data?.eventTitle
              : event_data?.eventDetails?.eventTitle || "No title"}
          </h2>
          <h2 className="font-normal capitalize line-clamp-2 !text-mid my-4 text-zinc-500">
            {event_data?.eventDescription
              ? event_data?.eventDescription
              : event_data?.eventDetails?.eventDescription || "No Description"}
          </h2>
          <div className="flex flex-row justify-between items-center mt-10">
            <span className="text-mid text-gray-500">
              {new Date(
                event_data?.startDate || event_data?.eventDetails?.startDate
              ).toDateString()}
            </span>
            <Link
              href={link}
              className="relative bg-black hover:border-transparent text-white transition-all z-10 px-6 py-3 rounded-full  font-medium text-[1.2rem] block hover:scale-105"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
