"use client";
import React from "react";
import SellerProductTable from "./Products/SellerProductTable";
import { Spinner, Tab, Tabs } from "@nextui-org/react";
import TableComp from "./Table";
import TableData from "./TableData";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

function SellerProductTab({ columns, filteredItems }) {
  const allData = filteredItems;
  const book = filteredItems.filter(
    (item) => item.category.categoryName === "Books"
  );
  const electronic = filteredItems.filter(
    (item) => item.category.categoryName === "Electronics"
  );

  return (
    <>
      <Tabs
        aria-label="Options"
        size="lg"
        radius="sm"
        className="text-[1.8rem]"
        classNames={{ tab: "text-[1.6rem]" }}
      >
        <Tab
          key="all"
          title="All"
          className="py-[2rem] px-[2rem] text-near_normal w-full"
        >
          {/* <SellerProductTable length={5}/> */}
          <TableData columns={columns} data={allData} />
        </Tab>
        <Tab
          key="electronic"
          title="Electronic "
          className="py-[2rem] px-[2rem] text-near_normal"
        >
          <TableData columns={columns} data={electronic} />
        </Tab>
        <Tab
          key="book"
          title="Book"
          className="py-[2rem] px-[2rem] text-near_normal"
        >
          <TableData columns={columns} data={book} />
        </Tab>
      </Tabs>
    </>
  );
}

export default SellerProductTab;
