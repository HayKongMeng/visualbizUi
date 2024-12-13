import Image from "next/image";
import React from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { EventCardV3 } from "@/app/components/Cards/FollowingCard";
import { getAllEvent } from "@/app/services/event.service";

const page = async () => {
  const allEvents = await getAllEvent(1, 100);
  return (
    <main>
      <section className="banner overlay after:rounded-3xl relative w-container mx-auto my-10 ">
        <div className="flex flex-col gap-1 absolute items-center bottom-10 right-10 z-10">
          <p className="text-white font-light">Scroll down</p>
          <Link
            href={"#event"}
            className="px-6 py-2 backdrop-blur-sm border flex items-center justify-center bg-white/10  text-white mx-auto text-center rounded-full relative mt-4"
          >
            <span className="text-white text-mid font-light justify-center flex gap-1 items-center">
              See Events{" "}
              <ArrowDown className="stroke-white size-8 stroke-[1.2]" />
            </span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </Link>
        </div>
        <Image
          className="h-[75vh] object-cover rounded-3xl"
          src={
            "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={1000}
          height={1000}
          alt="poster event"
        />
        <div className="absolute w-[50rem] left-20 top-1/2 -translate-y-1/2 z-10">
          <div>
            <h3 className="text-[6.4rem] text-white font-medium">
              Explore your <br /> interested in events
            </h3>
          </div>
        </div>
      </section>
      <section
        id="event"
        className="w-container scroll-mt-10 mx-auto mb-big_margin flex flex-col gap-6"
      >
        <span className="text-semi_header">All Events</span>
        <section className="grid grid-cols-4 gap-md_gap">
          {allEvents?.map((event, idx) => (
            // <NewEventCard link={"/view/events/all/" + idx} />
            <EventCardV3
              event_data={event}
              key={idx}
              link={
                "/view/events/all/" + event?.shop?.shopId + "/" + event?.eventId
              }
            />
          ))}
        </section>
      </section>
    </main>
  );
};

export default page;
