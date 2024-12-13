import Image from "next/image";
import React from "react";

function CommentInput({ event }) {
  return (
    <section>
      <section className="border rounded-full grid grid-cols-[auto_1fr_auto] items-center p-2 pr-6">
        <section className="">
          <Image
            src={event.event_img}
            width={500}
            height={500}
            alt="Profile"
            className="rounded-full object-cover size-[3rem]"
          />
        </section>
        <input
          className="w-full border-none px-5 focus:outline-none"
          placeholder={"Comment as thanak....."}
        />
        <p className="text-blue-500 cursor-pointer font-semibold">Send</p>
      </section>
    </section>
  );
}

export default CommentInput;
