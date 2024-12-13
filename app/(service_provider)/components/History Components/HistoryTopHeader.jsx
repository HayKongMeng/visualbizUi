"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
  Pagination,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useMemo, useState } from "react";
// import { historyColumns, historyRows } from "@/app/(seller)/data/data";
import HistoryTab from "./HistoryTab";
 const historyRows = [
  {
    key: "1",
    customers_history: {
      img: "/images/profile.JPG",
      name: "Thanak",
      email: "Cool product I love 😃",
    },
    order_no_history: "6546",
    amount_history: "$1000",
    date_history: "10 Jan 2024",
    status_history : "Paid"
  },
  {
    key: "2",
    customers_history: {
      img: "/images/profile.JPG",
      name: "Thanak",
      email: "Cool product I love 😃",
    },
    order_no_history: "242",
    amount_history: "$1000",
    date_history: "10 Jan 2024",
    status_history : "Paid"
  },
  {
    key: "3",
    customers_history: {
      img: "/images/profile.JPG",
      name: "Thanak",
      email: "Cool product I love 😃",
    },
    order_no_history: "234234",
    amount_history: "$1000",
    date_history: "10 Jan 2024",
    status_history : "Paid"
  },
];

 const historyColumns = [
  {
    key: "customers_history",
    label: "Customer Name",
  },
  {
    key: "order_no_history",
    label: "Order No",
  },
  {
    key: "amount_history",
    label: "Amount",
  },
  {
    key: "date_history",
    label: "Date",
  },
  {
    key: "status_history",
    label: "Status",
  },
];

function HistoryTopHeader() {
  const [filterValue, setFilterValue] = React.useState("");
  const hasSearchFilter = Boolean(filterValue);

  const rows = historyRows;
  const columns = historyColumns;
  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...rows];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((row) =>
        row.order_no_history.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return filteredUsers;
  }, [hasSearchFilter, filterValue, rows]);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue("");
    }
  }, []);
  const topContent = React.useMemo(() => {
    return (
      <div className="flex items-center flex-col w-full mt-10">
       
        <div className="flex items-center  gap-5   self-end">
          <div>
            <Input
              classNames={{
                input: "text-[1.2rem]",
                inputWrapper: "py-4 pr-14 h-[3.9rem] overflow-y-hidden",
              }}
              radius="sm"
              size="lg"
              placeholder="Search by order_no"
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon absolute top-1/2 right-0 size-[2rem]  stroke-dark_gray  -translate-x-1/2 -translate-y-[50%]"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    fill="none"
                    // stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  />
                  <path
                    fill="none"
                    // stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M338.29 338.29L448 448"
                  />
                </svg>
              }
              value={filterValue}
              onValueChange={onSearchChange}
            />
          </div>
        </div>
        <div className="w-full">
           <HistoryTab columns={columns} filteredItems={filteredItems}/>
        </div>
      </div>
    );
  }, [filterValue, columns, filteredItems, onSearchChange]);

  return <>{topContent}</>;
}

export default HistoryTopHeader;
