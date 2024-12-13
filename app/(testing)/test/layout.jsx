import React from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { sellerGetShopCurrentUser } from "@/app/services/shop.service";

const layout = async ({ children }) => {
  const user = await sellerGetShopCurrentUser();
  return (
    <div className="">
      <SideBar />
      <main className="ml-[20rem]">
        <Header user={user} />
        <div className="mt-10 overflow-hidden p-10">{children}</div>
      </main>
    </div>
  );
};

export default layout;
