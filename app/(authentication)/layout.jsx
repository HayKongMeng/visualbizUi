import React from "react";
import AuthTabs from "./components/AuthTabs";

function layout({ children }) {
  return (
    <section className="!text-[1.6rem] bg-primary h-screen overflow-y-hidden">
      {children}
    </section>
  );
}

export default layout;
