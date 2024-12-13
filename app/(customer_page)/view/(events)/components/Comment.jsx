import React, { Fragment } from "react";
import CommentIcon from "./CommentIcon";
import CommentInput from "./CommentInput";
import CommentUser from "./CommentUser";

function Comment({ event }) {
  return (
    <section>
      <section className="flex gap-5 flex-col">
        <section className="flex justify-between items-center">
          <section className="font-semibold text-normal">Comment</section>
          <CommentIcon event={event} />
        </section>
        <CommentInput event={event} />
        <section className="flex gap-5 flex-col lg:h-[25rem] lg:overflow-y-scroll py-5">
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

export default Comment;
