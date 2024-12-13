import SideBar from "./components/Sidebar";
import React from "react";
import { Poppins } from "next/font/google";
const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
function layout({ children }) {
  return (
    <>
      <div className="text-normal h-screen flex gap-md_gap overflow-hidden">
        <div className="p-10 pr-0 h-full text-white">
          <SideBar />
        </div>
        <div className="p-10 pl-0  w-full h-full text-white">{children}</div>
      </div>
    </>
  );
}

export default layout;
