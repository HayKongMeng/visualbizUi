import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllEvent } from "@/app/services/event.service";
import { getPhoto } from "@/app/utils/util_function";
import { Star } from "lucide-react";
import { Bookmark } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { MapPin } from "lucide-react";
import CommentCard from "@/app/components/Cards/CommentCard";
import { notFound } from "next/navigation";
import { getShopById } from "@/app/services/shop.service";
import PostCommentEvent from "../../../(events)/events/all/[...event_id]/components/PostCommentEvent";
import { bookmarkEvent } from "@/app/action/bookmarkAction";
import BookmarkButton from "@/app/components/Buttons/BookmarkButton";

const page = async ({ params: { event_id, service_id } }) => {
  if (
    service_id == "undefined" ||
    isNaN(service_id) ||
    event_id == "undefined" ||
    isNaN(event_id)
  )
    notFound();
  const currentServiceProvider = await getShopById(service_id);

  if (!currentServiceProvider) notFound();

  const events = await getAllEvent(1, 100);
  const curentShopEvent = events.find(
    (event) =>
      event?.shop?.shopId === parseInt(service_id) &&
      event?.shop?.shopType?.shopType == "service provider"
  );

  return (
    <section className="w-[65%] mx-auto my-md_margin">
      <div className="detail grid grid-cols-1 gap-big_gap items-baseline">
        <div className="flex flex-col gap-10">
          {/* <h3 className="text-big_header font-semibold">Promotion Discount</h3> */}
          <div className="rounded-2xl grid grid-cols-[auto_1fr] gap-sm_gap">
            <Link
              href={
                curentShopEvent?.shop?.shopType?.shopType == "Seller"
                  ? `/view/shop/${curentShopEvent?.shop?.shopId}`
                  : `/view/service/${curentShopEvent?.shop?.shopId}`
              }
            >
              <Image
                className="size-[6rem] rounded-full"
                src={getPhoto(curentShopEvent?.shop?.shopProfileImg)}
                width={1000}
                height={1000}
                alt="poster event"
              />
            </Link>
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center gap-3 h-full">
                <Link
                  href={
                    curentShopEvent?.shop?.shopType?.shopType == "Seller"
                      ? `/view/shop/${curentShopEvent?.shop?.shopId}`
                      : `/view/service/${curentShopEvent?.shop?.shopId}`
                  }
                  className="text-[2rem] font-medium"
                >
                  {curentShopEvent?.shop?.shopName}
                </Link>
                <div className="flex gap-2">
                  <Star className="stroke-none fill-secondary size-8" />
                  <Star className="stroke-none fill-secondary size-8" />
                  <Star className="stroke-none fill-secondary size-8" />
                  <Star className="stroke-none fill-secondary size-8" />
                </div>
              </div>

              <div className="share-section">
                {/* <Bookmark className="size-[5rem] p-5 rounded-full border-2 border-bg" /> */}
                <BookmarkButton fn={bookmarkEvent} id={parseInt(event_id)} />
              </div>
            </div>
          </div>

          <p className="leading-normal text-normal text-justify">
            {curentShopEvent?.eventDescription}
          </p>
          <div className="banner relative overlay after:rounded-3xl">
            <Image
              className="h-[50rem] rounded-3xl object-cover"
              src={getPhoto(curentShopEvent?.eventImage)}
              width={1000}
              height={1000}
              alt="poster event"
            />

            <div className="absolute z-10 left-10 bottom-10 flex flex-col gap-4">
              <h3 className="text-big_header font-semibold text-white">
                {curentShopEvent?.eventTitle}
              </h3>
              <div className="felx flex-col gap-4">
                <div>
                  <p className="text-normal text-white flex items-center gap-3 ">
                    <CalendarCheck className="stroke-white size-8" />
                    {new Date(curentShopEvent?.startDate).toDateString()}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-6">
                <div className="felx flex-col gap-4">
                  <div className="flex gap-3">
                    <MapPin className="stroke-white size-8" />
                    <p className="text-normal text-white">
                      {curentShopEvent?.eventAddress || "Unknow"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="event-detail my-md_margin">
        <div className="flex flex-col gap-6">
          <p className="text-semi_header font-medium">Comments</p>
          <PostCommentEvent eventId={["", event_id]} />
          <div className=" flex flex-col">
            {events?.comment?.map((comment, idx) => (
              <CommentCard key={idx} className={" py-6 "} />
            ))}
            {/* <button
              type="button"
              className="small-btn bg-primary text-white rounded-md self-center hover:scale-110 transition-all"
            >
              See more
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
