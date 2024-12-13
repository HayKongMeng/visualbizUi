"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import DashboardIcon from "./Icons/SidebarIcon/NonActive/DashboardIcon";
import Link from "next/link";
import ProductIcon from "./Icons/SidebarIcon/NonActive/ProductIcon";
import EventIcon from "./Icons/SidebarIcon/NonActive/EventIcon";
import PromotionIcon from "./Icons/SidebarIcon/NonActive/PromotionIcon";
import BarcodeIcon from "./Icons/SidebarIcon/NonActive/BarcodeIcon";
import HistoryIcon from "./Icons/SidebarIcon/NonActive/HistoryIcon";
import LogoutIcon from "./Icons/SidebarIcon/NonActive/LogoutIcon";
import { usePathname } from "next/navigation";
import ActiveDashboardIcon from "./Icons/SidebarIcon/Active/DashboardIcon";
import ActiveProductIcon from "./Icons/SidebarIcon/Active/ProductIcon";
import ActiveEventIcon from "./Icons/SidebarIcon/Active/EventIcon";
import ActivePromotionIcon from "./Icons/SidebarIcon/Active/PromotionIcon";
import ActiveBarcodeIcon from "./Icons/SidebarIcon/Active/BarcodeIcon";
import ActiveHistoryIcon from "./Icons/SidebarIcon/Active/HistoryIcon";
import CartIcon from "./Icons/SidebarIcon/Active/CartIcon";
import ActiveCartIcon from "./Icons/SidebarIcon/NonActive/CartIcon";
import ShopIcon from "./Icons/SidebarIcon/NonActive/ShopIcon";
import ShopIconActive from "./Icons/SidebarIcon/Active/ShopIcon";
import LogoutModal from "./LogoutModal";

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
      link: "/seller/dashboard",
    },
    {
      id: 2,
      title: "Product",
      icons: <ProductIcon />,
      defaultTab: false,
      active_icons: <ActiveProductIcon />,

      link: "/seller/product",
    },
    {
      id: 3,
      title: "Order",
      icons: <CartIcon />,
      active_icons: <ActiveCartIcon />,

      link: "/seller/order",
    },
    {
      id: 4,
      title: "Shop",
      icons: <ShopIcon />,
      active_icons: <ShopIconActive />,

      link: "/seller/shop-management",
    },
    {
      id: 5,
      title: "Event",
      icons: <EventIcon />,
      active_icons: <ActiveEventIcon />,
      link: "/seller/event",
    },
    {
      id: 6,
      title: "Promotion",
      icons: <PromotionIcon />,
      active_icons: <ActivePromotionIcon />,
      link: "/seller/promotion",
    },
    {
      id: 7,
      title: "Barcode",
      icons: <BarcodeIcon />,
      active_icons: <ActiveBarcodeIcon />,
      link: "/seller/barcode",
    },
    {
      id: 8,
      title: "History",
      icons: <HistoryIcon />,
      active_icons: <ActiveHistoryIcon />,
      link: "/seller/history",
    },
  ];
  return (
    <section className="h-full w-[25rem] rounded-2xl bg-primary  pt-5 py-5">
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
                  pathName == data.link ? "bg-white text-black" : "text-white"
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
