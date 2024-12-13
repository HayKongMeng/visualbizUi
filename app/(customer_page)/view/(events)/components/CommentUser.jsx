import React from "react";
import ProfileHeaderUser from "./ProfileHeaderUser";

function CommentUser({ event }) {
  return (
    <section className="flex flex-col gap-5 text-near_normal">
      <ProfileHeaderUser event={event} />
      <section>Good product and great promotion</section>
    </section>
  );
}

export default CommentUser;
