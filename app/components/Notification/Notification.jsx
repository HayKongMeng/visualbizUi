import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import NotificationTabs from "./NotificationTabs";

function Notification() {
  return (
    <section>
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <section>
            <Image
              width={1000}
              height={1000}
              alt="bell"
              src="/svgs/bell.svg"
              className="w-full  h-[2.6rem] cursor-pointer object-cover rounded-full"
            />{" "}
          </section>
        </PopoverTrigger>
        <PopoverContent>
          <section className=" py-[2rem] w-[40rem] h-[55rem] overflow-y-hidden">
            <section className="flex flex-col gap-5">
              <section className="text-[1.8rem] font-bold px-5">
                Notification
              </section>
              <section className="w-full">
                <NotificationTabs />
              </section>
            </section>
          </section>
        </PopoverContent>
      </Popover>
    </section>
  );
}

export default Notification;
