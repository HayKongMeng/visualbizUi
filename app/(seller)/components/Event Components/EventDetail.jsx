import BackIcon from "@/app/(authentication)/(forgot-password)/components/BackIcon";

import ViewBookmarkButton from "@/app/components/Buttons/ViewBookmarkButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EventComment from "./EventComment";
import ProfileHeaderSeller from "@/app/(customer_page)/view/(events)/components/ProfileHeaderSeller";

function EventDetail({ event }) {
  return (
    <section className=" m-auto py-10  flex justify-center flex-col">
      <section className=" flex gap-4 py-10">
        <BackIcon />
        <Link className="font-bold" href={"/seller/event"}>
          Back
        </Link>
      </section>
      <section className="flex gap-10 flex-col lg:flex-row">
        <section className="lg:w-[80rem]">
          <Image
            src="/images/event-detail-img.png"
            // src={event.profile_img}
            alt="EventDetail"
            width={500}
            height={500}
          />
        </section>
        <section className="flex gap-5 flex-col">
          <section className="flex justify-between items-center">
            <ProfileHeaderSeller event={event} />
            <ViewBookmarkButton />
          </section>
          <section className="font-semibold text-[2rem]">{event?.title}</section>
          <section>{event?.description}</section>
          <EventComment event={event} />
        </section>
      </section>
    </section>
  );
}

export default EventDetail;
