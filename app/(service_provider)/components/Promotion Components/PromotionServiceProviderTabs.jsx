"use client";
import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import PromotionServiceProviderCard from "./PromotionServiceProviderCard";
function PromotionServiceProviderTabs({allPromotion}) {
  console.log(allPromotion)
  return (
    <Tabs
      classNames={{
        panel: "h-full mb-[4rem]  overflow-y-scroll",
        tabList: "",
        tabContent: " text-near_normal px-[1.5rem]",
      }}
      aria-label="Options"
      size="lg"
      radius="sm"
      className="text-[1.8rem]"
    >
      <Tab
        key="all_promotion"
        title="All Promotion"
        className=" h-auto text-near_normal py-5  overflow-y-scroll"
      >
        <div className="h-full bg-bg p-5 rounded-3xl grid grid-cols-4 gap-16 overflow-y-scroll">
          {allPromotion?.map((data) => (
            <PromotionServiceProviderCard key={data} data={data}/>

            // <PromotionDetail key={arr}/>
          ))}
        </div>
      </Tab>
      <Tab
        key="this_week_promotion"
        title="This week "
        className="py-5 h-auto text-near_normal   overflow-y-scroll"
      >
        <div className="h-full bg-bg p-5 rounded-3xl grid grid-cols-4 gap-16 overflow-y-scroll">
          {Array.from({ length: 29 }).map((arr) => (
            <PromotionServiceProviderCard key={arr} />
          ))}
        </div>
      </Tab>
      <Tab
        key="other_promotion"
        title="Other"
        className="py-5 h-auto text-near_normal   overflow-y-scroll"
      >
        <div className="h-full bg-bg p-5 rounded-3xl grid grid-cols-4 gap-16 overflow-y-scroll">
          {Array.from({ length: 2 }).map((arr) => (
            <PromotionServiceProviderCard key={arr} />
          ))}
        </div>
      </Tab>
    </Tabs>
  );
}

export default PromotionServiceProviderTabs;
