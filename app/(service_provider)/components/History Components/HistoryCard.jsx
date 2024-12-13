import Image from "next/image";
import React from "react";
import CartIcon from "../Icons/SidebarIcon/Active/CartIcon";

function HistoryCard({ number, title, icon }) {
  return (
    <div className={`bg-[#E8BE8E]  w-[40rem] rounded-2xl bg-cover bg-no-repeat bg-[url("/svgs/CardDesign.svg")]`}>
      <div className="flex gap-10 items-center p-8 ">
        <div className="rounded-full p-5 border bg-white">{icon}</div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-[1.8rem]">{title}</div>
          <div className="text-[2.5rem]">{number}</div>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
