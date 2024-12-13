import React from "react";
import SellerProfile from "./SellerProfile";

function SellerProfileHeader({title}) {
  return (
    <section className="w-full flex justify-between  items-center overflow-y-hidden bg-white">
      <section className="rounded-xl text-[2rem] font-bold">{title}</section>{" "}
      <section className="flex items-center gap-5">
        <SellerProfile />
      </section>
    </section>
  );
}

export default SellerProfileHeader;
