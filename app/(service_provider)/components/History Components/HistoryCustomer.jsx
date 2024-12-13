import Image from "next/image";
import React from "react";

function HistoryCustomer({item}) {
  return (
    <section className="flex gap-5 items-center">
      <Image
        width={1000}
        height={1000}
        alt="profile"
        src={item.img}
        className="w-[4rem] h-[4rem] object-cover cursor-pointer rounded-full"
      />
      <div className="text-xl">
        <div className="font-semibold">
           {item.name}
        </div>
        <div>{item.email}</div>
      </div>
    </section>
  );
}

export default HistoryCustomer;
