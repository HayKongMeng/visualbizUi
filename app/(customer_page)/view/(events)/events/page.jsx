import React, { Fragment } from "react";
import EventAllProduct from "./all-product-event/page";
import EventServiceCard from "@/app/components/Cards/EventServiceCard";
import { eventDatas } from "../eventData";
import EventCard from "@/app/components/Cards/EventCard";
import ViewBookmarkButton from "@/app/components/Buttons/ViewBookmarkButton";
import Link from "next/link";
import { getAllEvent } from "@/app/services/event.service";

export  async function EventPage() {
  // const events = eventDatas;
 const events = await getAllEvent();
 console.log("first",events)
  return (
    <section className="w-container mx-auto py-10">
      <section className="flex flex-col gap-10 py-10">
        <Link
          href="/view/events/all-product-event"
          className="text-[1.8rem] font-bold"
        >
          Products Events
        </Link>
        <main className="grid grid-cols-4 gap-md_gap">
          {events.map((event) => (
            <Fragment key={event.eventId}>
              <EventCard event={event} viewFor="" inViewAll={true} />
            </Fragment>
          ))}
        </main>
      </section>
      <section className="flex flex-col gap-10 py-10">
        <Link
          href="/view/events/all-service-event"
          className="text-[1.8rem] font-bold"
        >
          Services Event
        </Link>
        <main className="grid grid-cols-4 gap-md_gap">
          {events.map((event) => (
            <Fragment key={event.id}>
              <EventServiceCard event={event} />
            </Fragment>
          ))}
        </main>
      </section>
    </section>
  );
}

export default EventPage;
