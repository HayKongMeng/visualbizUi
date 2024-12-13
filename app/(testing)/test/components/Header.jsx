import { ChevronDown } from "lucide-react";
import { BellRing } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = ({ user }) => {
  return (
    <div className="py-[2rem] px-10 bg-white z-10 sticky top-0 flex items-center justify-between">
      <p className="text-big_header">Dashboard</p>
      <div className="flex gap-4 items-center">
        <div className="flex items-center border p-3 rounded-full mr-6 gap-3 cursor-pointer group">
          <BellRing className="size-[2rem]  group-hover:stroke-secondary cursor-pointer" />
          {/* <span className="text-mid group-hover:text-secondary">
            Notification
          </span> */}
        </div>

        <Image
          src={"/images/profile.JPG"}
          width={1000}
          height={1000}
          alt="profile"
          className="size-[4rem] rounded-full"
        />
        <div>
          <p className="flex items-center gap-2">
            <span className="text-normal font-medium cursor-pointer">
              {user?.shopName}
            </span>
            <ChevronDown className="stroke-[1.5]" />
          </p>
          {/* <p className="flex items-center gap-2">
            <span className="text-mid">sophanit@gmail.com</span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
