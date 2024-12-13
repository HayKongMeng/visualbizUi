import Breadcrump from "@/app/components/Breadcrumps";
import ViewBookmarkButton from "@/app/components/Buttons/ViewBookmarkButton";
import EventCard from "@/app/components/Cards/EventCard";
import { eventDatas } from "../../eventData";
import React from "react";

function EventAllProduct() {
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
              <React.Fragment key={idx}>
                <EventCard event={event} viewFor="" inViewAll={true} />
              </React.Fragment>
            );
          })}
        </main>
      </section>
    </>
  );
}

export default EventAllProduct;
