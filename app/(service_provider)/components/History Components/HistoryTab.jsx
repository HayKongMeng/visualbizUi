"use client";

import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import HistoryTable from "./HistoryTable";

function SellerHistoryTab({ columns, filteredItems }) {
  return (
    <Tabs aria-label="Options" size="lg" radius="sm" className="text-[1.8rem]" classNames={{tab: "text-[1.6rem]"}}>
      <Tab
        key="order_history"
        title="Order History"
        className="py-[2rem]  text-near_normal w-full"
      >
        {/* <SellerProductTable length={5}/> */}
        {/* <TableData columns={columns} filteredItems={filteredItems} />
         */}
        <HistoryTable columns={columns} filteredItems={filteredItems} />
      </Tab>

      {/* <Tab key="book" title="Book" className="py-[2rem] px-[2rem] text-near_normal">
        <TableData columns={columns} filteredItems={filteredItems} />
      </Tab> */}
    </Tabs>
  );
}

export default SellerHistoryTab;
