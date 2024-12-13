import React from "react";
import Profile from "./Profile";
import SellerProfile from "@/app/(seller)/components/SellerProfile";

function ProfileHeader({ title }) {
  return (
    <section className="w-full flex justify-between shadow-xl p-5 rounded-xl  items-center overflow-y-hidde bg-white">
      <section className="rounded-xl text-title font-bold">{title}</section>{" "}
      <section className="flex items-center gap-5">
        <SellerProfile />
      </section>
    </section>
  );
}

export default ProfileHeader;
