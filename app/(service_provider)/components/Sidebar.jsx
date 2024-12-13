"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import DashboardIcon from "../icons/SidebarIcon/NonActive/DashboardIcon";
import ActiveDashboardIcon from "../icons/SidebarIcon/Active/DashboardIcon";
import CartIcon from "../icons/SidebarIcon/Active/CartIcon";
import ActiveCartIcon from "../icons/SidebarIcon/NonActive/CartIcon";
import EventIcon from "../icons/SidebarIcon/NonActive/EventIcon";
import ActiveEventIcon from "../icons/SidebarIcon/Active/EventIcon";
import LogoutIcon from "../icons/SidebarIcon/NonActive/LogoutIcon";
import HistoryIcon from "../icons/SidebarIcon/NonActive/HistoryIcon";
import ActiveHistoryIcon from "../icons/SidebarIcon/Active/HistoryIcon";
import ScheduleIcon from "../icons/SidebarIcon/NonActive/ScheduleIcon";
import ActiveScheduleIcon from "../icons/SidebarIcon/Active/ScheduleIcon";
import AppointmentIcon from "../icons/SidebarIcon/NonActive/AppointmentIcon";
import ActiveAppointmentIcon from "../icons/SidebarIcon/Active/AppointmentIcon";
import ShopIcon from "../icons/SidebarIcon/NonActive/ShopIcon";
import ShopIconActive from "../icons/SidebarIcon/Active/ShopIcon";
import PromotionIcon from "../icons/SidebarIcon/NonActive/PromotionIcon";
import ActivePromotionIcon from "../icons/SidebarIcon/Active/PromotionIcon";

function SellerSideBar() {
  const pathName = usePathname();
  console.log(pathName);
  const sideTabData = [
    {
      id: 1,
      title: "Dashboard",
      icons: <DashboardIcon />,
      defaultTab: true,
      active_icons: <ActiveDashboardIcon />,
      link: "/service-provider/dashboard",
    },
    {
      id: 2,
      title: "Shop",
      icons: <ShopIcon />,
      defaultTab: false,
      active_icons: <ShopIconActive />,
      link: "/service-provider/shop-management",
    },
    {
      id: 3,
      title: "Service",
      icons: <CartIcon />,
      active_icons: <ActiveCartIcon />,
      link: "/service-provider/service-management",
    },
    {
      id: 4,
      title: "Appointment",
      icons: <AppointmentIcon />,
      active_icons: <ActiveAppointmentIcon />,

      link: "/service-provider/appointment",
    },
    {
      id: 5,
      title: "Schedule",
      icons: <ScheduleIcon />,
      active_icons: <ActiveScheduleIcon />,
      link: "/service-provider/schedule",
    },
    {
      id: 6,
      title: "Promotion",
      icons: <PromotionIcon />,
      active_icons: <ActivePromotionIcon />,
      link: "/service-provider/promotion",
    },
    {
      id: 7,
      title: "Event",
      icons: <EventIcon />,
      active_icons: <ActiveEventIcon />,
      link: "/service-provider/event-management",
    },
    {
      id: 8,
      title: "History",
      icons: <HistoryIcon />,
      active_icons: <ActiveHistoryIcon />,
      link: "/service-provider/history",
    },
  ];
  return (
    <section className="h-full w-[25rem] bg-primary  pt-5 py-5 rounded-3xl  ">
      <section className="w-[20rem] p-5 mx-auto bg-white rounded-xl">
        <Image
          src="/our-logo.PNG"
          alt="VisualBiz-Logo"
          width={1000}
          height={1000}
          priority
        />
      </section>{" "}
      <section className="h-[90%] flex flex-col py-10  justify-between">
        <section
          id="sidebar"
          className="w-full text-white flex flex-col px-5 gap-4 justify-center items-start h-[85%]"
        >
          {sideTabData.map((data) => (
            <Fragment key={data.id}>
              <Link
                id="linksidebar"
                href={data.link}
                className={`flex gap-5 group hover:bg-white w-full rounded-2xl`}
              >
                {pathName.endsWith("seller") && data.defaultTab ? (
                  <div
                    className={`
                    } text-near_normal text-black items-center bg-white w-full rounded-xl flex gap-8  px-10 `}
                  >
                    <div id="myicon" className="">
                      {data.active_icons}
                    </div>
                    <div
                      className={`
                         hover:bg-white px-10 py-5 w-full text-black rounded-2xl`}
                    >
                      {data.title}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`
                } text-near_normal items-center ${
                  pathName == data.link
                    ? "bg-white text-black custom-svg"
                    : "text-white"
                }   w-full rounded-xl flex gap-5  px-10 `}
                  >
                    <div id="myicon" className="">
                      {pathName == data.link ? data.active_icons : data.icons}
                    </div>
                    <div
                      className={`${
                        pathName == data.link ? "text-black" : "text-white"
                      }  hover:bg-white px-10 py-5 w-full  group-hover:text-black rounded-2xl`}
                    >
                      {data.title}
                    </div>
                  </div>
                )}
              </Link>
            </Fragment>
          ))}
        </section>
        <section className=" px-10 h-auto">
          <Link
            id="linksidebar"
            href=""
            className={`flex gap-5 group hover:bg-white w-full rounded-2xl`}
          >
            <div className=" w-full rounded-xl flex gap-8 items-center  px-10 ">
              <LogoutIcon />
              <section
                className={`hover:bg-white px-10 py-5 w-full text-white group-hover:text-black rounded-2xl`}
              >
                Log out
              </section>
            </div>
          </Link>
        </section>
      </section>
    </section>
  );
}

export default SellerSideBar;
