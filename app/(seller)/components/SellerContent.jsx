import NotificationIcon from "@/app/components/Icons/NotificationIcon";
import ProfileTitle from "@/app/components/Profile/ProfileTitle";
import Image from "next/image";
import React from "react";
import SellerProfile from "./SellerProfile";
import StatCard from "./Cards/StatCard";
import SellerHeader from "./SellerHeader";
import SellerBoard from "./SellerBoard";
import DashboardTable from "./DashboardTable";
import SellerProfileHeader from "./SellerProfileHeader";

function SellerContent() {
  return (
    <section className=" w-full h-full pl-5 bg-white text-black overflow-y-hidden">
      <section className="flex flex-col gap-5">
        <SellerProfileHeader title={"Dashboard"} />
        <section className="h-full flex flex-col overflow-y-scroll gap-8 pb-10 ">
          <SellerHeader />
          <StatCard />
          <div className="h-[60rem]  overflow-y-scroll">
            <DashboardTable />
          </div>
          {/* <SellerBoard /> */}
        </section>
      </section>
    </section>
  );
}

export default SellerContent;
