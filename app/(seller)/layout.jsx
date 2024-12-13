import React from "react";
import SellerSideBar from "./components/SellerSidebar";

function layout({ children }) {
  return (
    <>
      <div className="text-normal h-screen flex overflow-hidden">
        <div className="p-10 pr-0 h-full text-white">
          <SellerSideBar />
        </div>
        <div className="p-10  w-full pl-5 h-full text-white">{children}</div>
      </div>
    </>
  );
}

export default layout;
