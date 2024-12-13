import NotificationIcon from "@/app/components/Icons/NotificationIcon";
import Image from "next/image";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import ProfileHeader from "./ProfileHeader";
import ProfileLists from "@/app/components/Profile/ProfileLists";
import Notification from "@/app/components/Notification/Notification";

function Profile() {
  return (
    <section className="overflow-hidden">
      <Popover shouldCloseOnBlur={true} placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <section className="flex gap-3 items-center">
            <Image
              width={1000}
              height={1000}
              alt="profile"
              src="/images/profile.JPG"
              className="w-[4rem] h-[4rem] object-cover cursor-pointer rounded-full"
            />
            <div className="text-near_normal">Thanak</div>
          </section>
        </PopoverTrigger>
        <PopoverContent className="px-0 py-0">
          <section className=" w-[35rem] overflow-y-hidden">
            <section className="flex flex-col  h-full">
              <section className="w-full p-10 pb-5 flex flex-col gap-5">
                <ProfileHeader />
                <section className="w-full border"></section>
              </section>
              <ProfileLists />
            </section>
          </section>
        </PopoverContent>
      </Popover>
    </section>
  );
}

export default Profile;
