import EventCard from "@/app/components/Cards/EventCard";
import React, { Fragment } from "react";
import { eventDatas } from "../../eventData";
import Container from "@/app/components/Container";
import Image from "next/image";
import Breadcrump from "@/app/components/Breadcrumps";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import ViewBookmarkButton from "@/app/components/Buttons/ViewBookmarkButton";
import EventServiceCard from "@/app/components/Cards/EventServiceCard";

function EventAllService() {
  const data = eventDatas;
  return (
    <>
      <section className="w-full bg-[#346974] bg-center h-[300px] bg-[url('/images/banner/eventBanner.png')] bg-contain  bg-no-repeat"></section>
      {/* <section className="px-[5rem] lg:px-[10rem]"> */}
      <section className="w-container mx-auto">
        <section className="flex justify-between">
          <Breadcrump />
          <ViewBookmarkButton />
        </section>
        <main className="grid grid-cols-4 gap-md_gap">
          {data.map((event, idx) => {
            return (
              <Fragment key={idx}>
                <EventServiceCard event={event} />
              </Fragment>
            );
          })}
        </main>
      </section>
    </>
  );
}

export default EventAllService;
