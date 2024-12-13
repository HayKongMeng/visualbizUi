"use client";
import { useStore } from "@/app/store/sidebar_store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const SidebarButton = ({ sideabarName, icon, link }) => {
  const { sideabar, setSideabar, setLocalSideabar } = useStore();

  useEffect(() => {
    if (!sideabar) {
      setLocalSideabar();
      setSideabar("All");
    }
  }, [sideabar, setSideabar, setLocalSideabar]);
  let baseClasses =
    "flex items-center gap-xs_gap text-description font-bold mb-3 cursor-pointer py-[1.3rem] px-[2rem] fill-black rounded-[1rem]";
  let activeClasses =
    sideabar === sideabarName
      ? " bg-white text-black font-[600] fill-black font-title"
      : " text-white font-normal font-title";
  let iconClasses = sideabar === sideabarName ? "fill-black" : "fill-white";


  let classes = `${baseClasses} ${activeClasses}`;

  return (
    <Link href={link}>
      <div
        onClick={() => {
          setSideabar(sideabarName);
        }}
        className={classes}
      >
        <Image
          className={`h-[3.1rem] w-[3.1rem] mr-3  ${iconClasses}`}
          src={icon}
          width={10}
          height={10}
          alt={`${sideabarName} icon`}
        />
        {sideabarName}
      </div>
    </Link>
  );
};

export default SidebarButton;
