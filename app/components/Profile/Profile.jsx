import React from "react";
import ProfileHeader from "./ProfileHeader";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import Image from "next/image";
import ProfileLists from "./ProfileLists";
import { getPhoto } from "@/app/utils/util_function";

function ProfilePage({ user }) {
  return (
    <section className="overflow-hidden">
      <Popover shouldCloseOnBlur={true} placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <section className="flex gap-3 items-center">
            <Image
              width={1000}
              height={1000}
              alt="profile"
              src={getPhoto(user?.profile_img || user?.shopProfileImg)}
              className="w-[4rem] h-[4rem] object-cover cursor-pointer rounded-full"
            />
            <div className="text-normal cursor-pointer capitalize">
              {user?.username || user?.shopName}
            </div>
          </section>
        </PopoverTrigger>
        <PopoverContent className="px-0 py-0">
          <section className=" w-[35rem] overflow-y-hidden">
            <section className="flex flex-col  h-full">
              <section className="w-full p-10 pb-5 flex flex-col gap-5">
                <ProfileHeader user={user} />
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

export default ProfilePage;
