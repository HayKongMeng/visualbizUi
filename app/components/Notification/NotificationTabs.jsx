"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NotificationCard from "./NotificationCard";

function NotificationTabs() {
  return (
    <Tabs
      aria-label="Options"
      color="primary"
      radius="sm"
      size="lg"
      variant="solid"
      className="px-5"
      fullWidth
    >
      <Tab key="all" title="All" className=" text-xl py-8 px-5 ">
        <section
          id="hide-scrollbar"
          className="h-[45rem]  overflow-y-scroll scroll-hidden pb-5"
        >
          {/* <NotificationCard /> */}
        </section>
      </Tab>
      <Tab key="order" title="Order" className=" text-xl py-8 px-5">
        <section
          id="hide-scrollbar"
          className="h-[45rem] overflow-y-scroll scroll-hidden pb-5"
        >
          {/* <NotificationCard /> */}
          {/* <NotificationCard /> */}
        </section>
      </Tab>
      <Tab key="appointment" title="Appointment" className=" text-xl py-8 px-5">
        <section
          id="hide-scrollbar"
          className="h-[45rem] overflow-y-scroll scroll-hidden pb-5"
        >
          {/* <NotificationCard /> */}
        </section>
      </Tab>
    </Tabs>
  );
}

export default NotificationTabs;
