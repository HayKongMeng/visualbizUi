import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import HistoryTable from "./HistoryTable";

function SellerHistoryTab({ historySellers }) {

  return (
    <Tabs aria-label="Options" size="lg" radius="sm" classNames={{tab: "text-[1.6rem]"}}>
      <Tab key="order_history" title="Order History" className="py-[2rem] px-[2rem] text-near_normal w-full">
        <HistoryTable filteredItems={historySellers}/>
      </Tab>
      {/* Add more tabs or remove as per your application's requirements */}
    </Tabs>
  );
}

export default SellerHistoryTab;