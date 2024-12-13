import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProfileHeader({ user }) {
  return (
    <section>
      <Link href={"/view/profile"} className="flex items-center gap-4">
        <section className="rounded-full w-[60px]  h-[60px]">
          <Image
            src={getPhoto(user?.profile_img || user?.shopProfileImg)}
            width={500}
            height={500}
            alt="Profile"
            className="rounded-full"
          />
        </section>
        <section className="flex flex-col gap-5">
          <section className="text-[1.8rem] font-semibold capitalize">
            {user?.username || user?.shopName}
          </section>
          <section className="text-[1rem]">{user?.email}</section>
        </section>
      </Link>
    </section>
  );
}

export default ProfileHeader;
