import React, { Fragment } from "react";
import SwitchIcon from "../Icons/SwitchIcon";
import ArrowIcon from "../Icons/ArrowIcon";
import UserIcon from "../Icons/UserIcon";
import BookmarkIcon from "../Icons/BookmarkIcon";
import HistoryIcon from "../Icons/HistoryIcon";
import LogoutIcon from "../Icons/LogoutIcon";
import { list } from "postcss";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import ProfileTitle from "./ProfileTitle";
import NotificationIcon from "../Icons/NotificationIcon";
import SellerIcon from "../Icons/SellerIcon";
import BackIcon from "@/app/(authentication)/(forgot-password)/components/BackIcon";
import ShopIconActive from "@/app/(seller)/components/Icons/SidebarIcon/Active/ShopIcon";
import LogoutModal from "@/app/(seller)/components/LogoutModal";
import { Store } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { UserRound } from "lucide-react";
import { Bookmark } from "lucide-react";
import { History } from "lucide-react";

function ProfileLists() {
  const profileListData = [
    {
      id: 1,
      icons: <UserRound />,
      title: "Profile",
      link: "/view/profile/",
      // arrow: <ArrowIcon />,
    },
    {
      id: 2,
      icons: <Store />,
      title: "Create Shop",
      link: "/create-shop",
      // arrow: <ArrowIcon />,
    },
    {
      id: 3,
      icons: <ArrowLeftRight />,
      title: "Switch Shop",
      options: [
        {
          id: 1,
          title: "Seller",
          icons: <Store />,
          link: "/seller",
        },
        {
          id: 2,
          title: "Service Provider",
          icons: <SellerIcon />,
          link: "/service-provider/dashboard",
        },
      ],
      link: "",
      arrow: <ArrowIcon />,
    },

    {
      id: 4,
      icons: <Bookmark />,
      title: "Bookmark",
      link: "/view/bookmark",
      // arrow: <ArrowIcon />,
    },
    {
      id: 5,
      icons: <History />,
      title: "History",
      link: "/view/history",
      // arrow: <ArrowIcon />,
    },
  ];
  return (
    <section className="text-normal">
      <section
        className={`flex flex-col justify-between ${
          profileListData.length === 5 ? "h-[47.5rem]" : "h-[42rem]"
        }`}
      >
        <section className="flex flex-col gap-4 items-center">
          {profileListData.map((list) => (
            <section className="w-full" key={list.id}>
              {list.options ? (
                <details className="w-full transition-all cursor-pointer ">
                  <summary className="flex items-center hover:bg-bg py-5 px-10 justify-between  w-full">
                    <section className="flex gap-8 items-center w-full">
                      {list.icons}
                      <section className="text-[1.4rem]">{list.title}</section>
                    </section>
                    <section>{list.arrow && list.arrow}</section>{" "}
                  </summary>
                  <section className="px-10 pt-5 flex flex-col">
                    {list.options.map((option) => (
                      <Link
                        href={option.link}
                        key={option.id}
                        className="p-5  flex items-center justify-between hover:bg-bg"
                      >
                        <section className="flex gap-8 items-center">
                          {option.icons}
                          <section className="text-[1.4rem]">
                            {option.title}
                          </section>
                        </section>
                      </Link>
                    ))}
                  </section>
                </details>
              ) : (
                <section className="hover:bg-bg">
                  <Link
                    href={list.link}
                    className="flex items-center justify-between p-5 px-10"
                  >
                    <>
                      <section className="flex gap-8 items-center">
                        {list.icons}
                        <section className="text-[1.4rem]">
                          {list.title}
                        </section>
                      </section>
                      <section>{list.arrow && list.arrow}</section>
                    </>
                  </Link>
                </section>
              )}
            </section>
          ))}
        </section>
        <Link href="/" className=" overflow-hidden rounded-2xl">
          <section className="flex gap-4  items-center p-10">
            <LogoutIcon />
            {/* <section className="font-semibold">Log out</section> */}
            <LogoutModal />
          </section>
        </Link>
      </section>
    </section>
  );
}

export default ProfileLists;
