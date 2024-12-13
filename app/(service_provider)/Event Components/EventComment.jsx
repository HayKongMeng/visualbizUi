
import CommentIcon from "@/app/(customer_page)/view/(events)/components/CommentIcon";
import CommentUser from "@/app/(customer_page)/view/(events)/components/CommentUser";
import React, { Fragment } from "react";


function EventComment({ event }) {
  return (
    <section>
      <section className="flex gap-5 flex-col">
        <section className="flex justify-between items-center">
          <section className="font-semibold text-[1.8rem]">Comment</section>
          <CommentIcon event={event} />
        </section>
        <section className="flex gap-5 flex-col lg:h-[50rem] lg:overflow-y-scroll py-5">
          {Array.from({ length: 10 }).map((arr, index) => (
            <Fragment key={index}>
              <CommentUser event={event} />
            </Fragment>
          ))}
        </section>
      </section>
    </section>
  );
}

export default EventComment;
