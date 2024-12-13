import Image from "next/image";
import React from "react";

function NotificationCard() {
  return (
    <section className="flex gap-5 items-center p-5  rounded-xl hover:bg-bg cursor-pointer">
      <section className="w-[60px] h-[60px]">
        <Image
          src={"/images/profile.JPG"}
          width={500}
          height={500}
          alt="Profile"
          className="rounded-full"
        />
      </section>
      <section className="flex flex-col gap-2">
        <section className="text-primary text-near_normal font-semibold">
          ShopServe Services
        </section>
        <section className="text-green-500 text-[1.2rem]">
          Your appointment has been accepted.
        </section>
        <section className="text-black/25 text-[1rem]">15 minute ago</section>
      </section>
    </section>
  );
}

export default NotificationCard;
