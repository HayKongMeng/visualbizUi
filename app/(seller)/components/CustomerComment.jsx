import Image from "next/image";
import React from "react";

function CustomerComment({ item }) {
  return (
    <section className="flex gap-5 items-center">
      <Image
        width={1000}
        height={1000}
        alt="profile"
        src={item.img}
        className="w-[4rem] h-[4rem] object-cover cursor-pointer rounded-full"
      />
      <div className="text-xl flex flex-col gap-2">
        <div className="font-semibold text-[1.6rem]">{item.name}</div>
        <div className="text-[1.4rem]">{item.cmt}</div>
      </div>
    </section>
  );
}

export default CustomerComment;
