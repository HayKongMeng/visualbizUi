import React from "react";

function ProfileTitle({ list }) {
  return (
    <>
      <section className="flex gap-8 items-center">
        {list.icons}
        <section>{list.title}</section>
      </section>
      <section>{list.arrow && list.arrow}</section>
    </>
  );
}

export default ProfileTitle;
