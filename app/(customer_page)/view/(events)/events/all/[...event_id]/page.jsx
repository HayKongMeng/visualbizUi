import CommentCard from "@/app/components/Cards/CommentCard";
import Image from "next/image";
import React from "react";
import { Bookmark } from "lucide-react";
import { Star } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { MapPin } from "lucide-react";
import { getShopById } from "@/app/services/shop.service";
import Link from "next/link";
import { getEventById } from "@/app/services/event.service";
import { getPhoto } from "@/app/utils/util_function";
import { notFound } from "next/navigation";
import PostCommentEvent from "./components/PostCommentEvent";
import { bookmarkEvent } from "@/app/action/bookmarkAction";
import BookmarkButton from "@/app/components/Buttons/BookmarkButton";

const page = async ({ params: { event_id } }) => {
  if (event_id[0] == "undefined" || isNaN(event_id[0])) notFound();
  const shop = await getShopById(event_id[0]);
  const event = await getEventById(event_id[1]);
  if (!shop || !event) notFound();
  console.log(shop);
  return (
    <section className="w-[65%] mx-auto my-md_margin">
      <div className="detail grid grid-cols-1 gap-big_gap items-baseline">
        <div className="flex flex-col gap-10">
          {/* <h3 className="text-big_header font-semibold">Promotion Discount</h3> */}
          <div className="rounded-2xl grid grid-cols-[auto_1fr] gap-sm_gap">
            <Link
              href={
                shop?.shopType?.shopType?.toLowerCase().includes("seller")
                  ? `/view/shop/${shop?.shopId}`
                  : `/view/service/${shop?.shopId}`
              }
            >
              <Image
                className="size-[6rem] rounded-full"
                src={getPhoto(shop?.shopProfileImg)}
                width={1000}
                height={1000}
                alt="poster event"
              />
            </Link>
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center gap-3 h-full">
                <Link
                  href={
                    shop?.shopType?.shopType?.toLowerCase().includes("seller")
                      ? `/view/shop/${shop?.shopId}`
                      : `/view/service/${shop?.shopId}`
                  }
                  className="text-[2rem] font-medium"
                >
                  {shop?.shopName}
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

          <p className="leading-normal text-justify">
            {event?.eventDescription}
          </p>
          <div className="banner relative overlay after:rounded-3xl">
            <Image
              className="h-[50rem] rounded-3xl object-cover"
              src={getPhoto(event?.eventImage)}
              width={1000}
              height={1000}
              alt="poster event"
            />

            <div className="absolute z-10 left-10 bottom-10 flex flex-col gap-4">
              <h3 className="text-big_header font-semibold text-white">
                {event?.eventTitle}
              </h3>
              <div className="felx flex-col gap-4">
                <div>
                  <p className="text-normal text-white flex items-center gap-3 ">
                    <CalendarCheck className="stroke-white size-8" />
                    {new Date(event?.startDate).toDateString()}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-6">
                <div className="felx flex-col gap-4">
                  <div className="flex gap-3">
                    <MapPin className="stroke-white size-8" />
                    <p className="text-normal text-white">
                      {event?.eventAddress || "Unknow"}
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
          {/* <div className="h-fit w-full">
            <form action="" className="grid grid-cols-[1fr_auto] gap-6 w-full">
              <label htmlFor="" className="">
                <input
                  type="text"
                  placeholder="write something"
                  className="border focus:outline-none py-3 px-10 min-w-[40rem] w-full rounded-xl"
                />
              </label>
              <button
                type="button"
                className="py-3 px-10 rounded-xl hover:border-transparent transition-all bg-primary text-white"
              >
                Post
              </button>
            </form>
          </div> */}
          <PostCommentEvent eventId={event_id} />
          <div className=" flex flex-col">
            {event?.comment?.map((comment, idx) => (
              <CommentCard data={comment} key={idx} className={" py-6"} />
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
