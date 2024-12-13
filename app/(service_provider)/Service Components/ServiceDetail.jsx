import BackIcon from "@/app/(authentication)/(forgot-password)/components/BackIcon";
import ViewBookmarkButton from "@/app/components/Buttons/ViewBookmarkButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServiceComment from "./ServiceComment";
import ProfileHeader from "../components/ProfileHeader";

function ServiceDetail({ event }) {
  return (
    <section className="w-container m-auto py-5  flex justify-center flex-col">
      <section className=" flex gap-4 py-10">
        <BackIcon />
        <Link className="font-bold" href={"/service_provider/event"}>
          Back
        </Link>
      </section>
      <section className="flex gap-10 flex-col lg:flex-row">
        <section className="lg:w-[100rem]">
          <Image
            src="/images/event-detail-img.png"
            // src={event.profile_img}
            alt="ServiceDetail"
            width={500}
            height={500}
          />
        </section>
        <section className="flex gap-5 flex-col">
          <section className="flex justify-between items-center">
            <ProfileHeader event={event} />
            <ViewBookmarkButton />
          </section>
          <section className="font-semibold text-[2rem]">{event.title}</section>
          <section>{event.description}</section>
          <ServiceComment event={event} />
        </section>
      </section>
    </section>
  );
}

export default ServiceDetail;
