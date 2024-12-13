"use client";
import React, { useState, useMemo, useCallback } from "react";
import { Input } from "@nextui-org/react";
import SellerHistoryTab from "./SellerHistoryTab";

function HistoryTopHeader({ historySellers }) {
  const [filterValue, setFilterValue] = useState("");

  const filteredItems = useMemo(() => {
    if (!filterValue) {
      return historySellers;
    }
    return historySellers.filter((item) =>
      item.order_no_history.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [historySellers, filterValue]);

  const handleSearchChange = useCallback((event) => {
    setFilterValue(event.target.value || "");
  }, []);

  return (
    <div className="flex items-center flex-col w-full mt-10">
      <div className="flex items-center gap-5 self-end">
        <Input
          classNames={{
            input: "text-[1.4rem]",
            inputWrapper: "py-4 h-[3.9rem] w-[25rem] overflow-y-hidden",
          }}
          radius="sm"
          size="lg"
          placeholder="Search by order number"
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon absolute top-1/2 right-0 size-[2rem] stroke-dark_gray -translate-x-1/2 -translate-y-[50%]"
              viewBox="0 0 512 512"
            >
              <path
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M338.29 338.29L448 448"
              />
            </svg>
          }
          value={filterValue}
          onChange={handleSearchChange}
        />
      </div>
      <div className="w-full">
        <SellerHistoryTab historySellers={filteredItems} />
      </div>
    </div>
  );
}

export default HistoryTopHeader;