import React from "react";
import SellerProfileHeader from "../../components/SellerProfileHeader";
import EventSellerTab from "../../components/Event Components/EventSellerTabs";
import AddEventModal from "../../components/Event Components/AddEventModal";
import { getEventOldest, getEventSeller, getEventThisWeek } from "@/app/services/event.service";

export async function EventPage() {
  const allEventdata = await getEventSeller();
  const eventThisWeek = await getEventThisWeek();
  const eventOldest = await getEventOldest();
  console.log(allEventdata)
  return (
    <div className="flex h-full pl-5 flex-col gap-5 overscroll-y-scroll">
      <div className="">
        <SellerProfileHeader title={"Event Management"} />
      </div>
      <div className=" flex flex-col  gap-5 h-full   overscroll-y-scroll">
        <div className="flex justify-end w-full mt-10 ">
          <div>
            <AddEventModal />
          </div>
        </div>
        <EventSellerTab allEventdata={allEventdata} eventThisWeek= {eventThisWeek}  eventOldest={ eventOldest} />
      </div>
    </div>
  );
}

export default EventPage;
