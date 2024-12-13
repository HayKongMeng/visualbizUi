import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProfileHeaderSeller({ event }) {
  return (
    <Link href={"/view/shop/ID_001"} className="flex items-center gap-4">
      <section className="rounded-full w-[50px] h-[50px] border bg-blue-500">
        <Image
          src={event?.event_img}
          width={500}
          height={500}
          alt="Profile"
          className="rounded-full"
        />
      </section>
      <section>
        <section className="text-[1.5rem] font-semibold">
          {event?.username}
        </section>
        <section className="text-small_title">5 minute ago</section>
      </section>
    </Link>
  );
}

export default ProfileHeaderSeller;
