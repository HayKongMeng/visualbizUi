"use client";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import EventSellerCard from "./EventSellerCard";
function EventSellerTab({ allEventdata, eventThisWeek, eventOldest }) {
  console.log("first", allEventdata);
  console.log(allEventdata);
  // const thisWeekEventData = eventDatas.filter((data) => {
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

  // const oldestEventData = eventDatas.filter((data) => {
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
  // const [eventData, setEventData] = useState([]);
  // console.log(eventData)
  // useEffect(() => {
  //   setEventData(data);
  // }, []);
  return (
    <Tabs
      classNames={{
        panel: "h-full mb-[4rem]  overflow-y-scroll",
        tab: "text-[1.6rem]",
        tabContent: " text-[1.4rem] font-semibold px-[1.5rem]",
      }}
      aria-label="Options"
      size="lg"
      radius="sm"
      className="text-[1.8rem] no-scrollbar"
    >
      <Tab
        key="all_event"
        title="All events"
        className=" h-auto text-near_normal py-5 no-scrollbar  overflow-y-scroll"
      >
        <div className="h-full   grid grid-cols-4 gap-5 overflow-y-scroll">
          {allEventdata?.map((data, index) => {
            return <EventSellerCard data={data} key={index} index={index} />;
          })}
        </div>
      </Tab>
      <Tab
        key="this_week"
        title="This week"
        className="py-5 h-auto text-near_normal no-scrollbar   overflow-y-scroll"
      >
        <div className="h-full grid grid-cols-4 gap-5 overflow-y-scroll">
          {eventThisWeek?.map((data, index) => {
            return <EventSellerCard data={data} key={index.id} />;
          })}
        </div>
      </Tab>
      <Tab
        key="oldest"
        title="Oldest"
        className="py-5 h-auto text-[1.4rem] no-scrollbar overflow-y-scroll"
      >
        <div className="h-full   grid grid-cols-4 gap-5 overflow-y-scroll">
          {eventOldest?.map((data, index) => {
            return <EventSellerCard data={data} key={index.id} />;
          })}
        </div>
      </Tab>
    </Tabs>
  );
}

export default EventSellerTab;
