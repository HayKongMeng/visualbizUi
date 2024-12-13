"use client";
import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import EventServiceProviderCard from "./EventServiceProviderCard";
function EventServiceProviderTab({ data}) {

  // const eventData = [
  //   {
  //     id: 1,
  //     img: "/images/eventservice_provider.jpg",
  //     title: "Best Winter Time discount sale",
  //     description: "",
  //     date: "May 16 2024",
  //   },
  // ];

  // const date = new Date(eventDatas[0].date);

  // const allEventData = data;
  // // const startWeek = date.getDate()
  // // const endWeek = date.getDate()+7;
  // const thisWeekEventData = allEventData.filter((data) => {
  //   const today = moment();
  //   const sevenDaysBefore = moment().subtract(7, "days");
  //   const eventDate = moment(data.date);
  //   const checkWeek = eventDate.isBetween(sevenDaysBefore, today, "day", "[]");

  //   if (!checkWeek) {
  //     return; // If the event is not within the last 7 days, return true to keep it in the filtered array
  //   } else {
  //     return data; // Otherwise, return false to filter it out
  //   }
  // });
  // const oldestEventData = allEventData.filter((data) => {
  //   const today = moment();
  //   const sevenDaysBefore = moment().subtract(7, "days");
  //   const eventDate = moment(data.date);

  //   const checkWeek = eventDate.isBetween(sevenDaysBefore, today, "day", "[]");

  //   if (!checkWeek) {
  //     return data; // If the event is not within the last 7 days, return true to keep it in the filtered array
  //   } else {
  //     return; // Otherwise, return false to filter it out
  //   }
  // });

  return (
    <Tabs
      classNames={{
        panel: "h-full mb-[4rem]  overflow-y-scroll",
        tabList: "",
        tabContent: " text-mid px-[1.5rem]",
      }}
      aria-label="Options"
      size="lg"
      radius="sm"
      className="text-[1.8rem]"
    >
      <Tab
        key="all_event"
        title="All events"
        className=" h-auto text-near_normal py-5  overflow-y-scroll"
      >
        {/* {sevenDaysBefore} */}
        <div className="h-full   grid grid-cols-4 gap-5 overflow-y-scroll">
          {data?.map((data) => {
            return <EventServiceProviderCard data={data} key={data.id} />;
          })}
        </div>
      </Tab>
      <Tab
        key="this_week"
        title="This week"
        className="py-5 h-auto text-mid   overflow-y-scroll"
      >
        <div className="h-full   grid grid-cols-4 gap-5 overflow-y-scroll">
          {/* {thisWeekEventData.map((data) => {
            return <EventServiceProviderCard data={data} key={data.id} />;
          })} */}
        </div>
      </Tab>
      <Tab
        key="oldest"
        title="Oldest"
        className="py-5 h-auto text-mid   overflow-y-scroll"
      >
        <div className="h-full   grid grid-cols-4 gap-5 overflow-y-scroll">
          {/* {oldestEventData.map((data) => {
            return <EventServiceProviderCard data={data} key={data.id} />;
          })} */}
        </div>
      </Tab>
    </Tabs>
  );
}

export default EventServiceProviderTab;
