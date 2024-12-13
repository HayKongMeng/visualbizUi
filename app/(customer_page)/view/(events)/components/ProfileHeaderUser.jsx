import Image from "next/image";
import React from "react";

function ProfileHeaderUser({ event }) {
  return (
    <section className="flex items-center gap-4">
      <section className="rounded-full w-[40px]  h-[40px] border bg-green-500">
        <Image
          src={event?.profile_img}
          width={500}
          height={500}
          alt="Profile"
          className="rounded-full"
        />
      </section>
      <section>
        <section className="text-near_normal font-semibold">
          Thanak Mech
        </section>
        <section className="text-[1rem]">5 minute ago</section>
      </section>
    </section>
  );
}

export default ProfileHeaderUser;
