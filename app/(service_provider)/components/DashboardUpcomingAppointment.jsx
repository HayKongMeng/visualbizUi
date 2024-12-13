"use client";

import { useState } from "react";
import Image from "next/image";
import AppointmentCard from "./Cards/AppointmentCard";
import Pagination from "./Pagination";
import Link from "next/link";
const DashboardUpcomingAppointment = () => {
  const appointments = [
    {
      userImage: "/images/service_provider/user2.png",
      serviceName: "Hair Cut",
      customerName: "John Syna",
      date: "March 01, 2025",
      time: "7:25 AM",
    },
    {
      userImage: "/images/service_provider/user3.png",
      serviceName: "Hair Cut",
      customerName: "John Syna",
      date: "March 01, 2025",
      time: "7:25 AM",
    },
    {
      userImage: "/images/service_provider/user2.png",
      serviceName: "Hair Cut",
      customerName: "John Syna",
      date: "March 01, 2025",
      time: "7:25 AM",
    },
  ];

  return (
    <div className="bg-[#F7F7F7] rounded-xl p-6 relative">
      <div className="flex justify-between py-4">
        <div className="text-normal font-semibold">Upcoming Appointment</div>
        <Link href={"#"} className="flex items-center gap-3">
          <span className="text-mid">See All</span>
          <Image
            className="w-4 h-6"
            src="/images/service_provider/icon/arrow_right.svg"
            alt="See All"
            width={10}
            height={10}
          />
        </Link>
      </div>
      <div className="w-full overflow-hidden overflow-y-scroll no-scrollbar">
        {appointments.map((appointment, index) => (
          <AppointmentCard key={index} {...appointment} />
        ))}
      </div>
    </div>
  );
};

export default DashboardUpcomingAppointment;
