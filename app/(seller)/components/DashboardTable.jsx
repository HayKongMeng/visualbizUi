"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { dashboardCustomerColumns, dashboardCustomerRow } from "../data/data";
import CustomerComment from "./CustomerComment";

function DashboardTable() {
  const [filterValue, setFilterValue] = React.useState("");
  const rows = dashboardCustomerRow;
  const columns = dashboardCustomerColumns;
  const hasSearchFilter = Boolean(filterValue);
  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...rows];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((row) =>
        row.customers.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [rows, filterValue, hasSearchFilter]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const pages = Math.ceil(filteredItems.length / rowsPerPage);
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);
  const topContent = React.useMemo(() => {
    return (
      <div className="flex items-center justify-between w-full ">
        {/* <SellerProductTab /> */}
        {/* <div className="w-full">Hey</div> */}
        <div className="flex items-center justify-end gap-5  w-full self-end">
          <div>
            <Input
              classNames={{
                input: "text-near_normal",
                inputWrapper: "py-4 h-[3.9rem] overflow-y-hidden",
              }}
              radius="sm"
              size="lg"
              placeholder="Search by name..."
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
      </div>
    );
  }, [filterValue, onSearchChange]);

  return (
    <Table
      // topContent={topContent}
      removeWrapper
      isHeaderSticky
      topContentPlacement="outside"
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "bg-bg",
        base: " h-[100%] pb-[25rem] overflow-y-scroll ",
        table: "h-full mb-[50px] overflow-y-scroll",
        // thead: "bg-red-500 w-full p-0 m-0"
      }}
      aria-label="Dashboard Table"
    >
      <TableHeader>
          <TableColumn  className="bg-primary">
            <div className={` text-2xl text-white `}>Customer</div>
          </TableColumn>
          <TableColumn  className="bg-primary">
            <div className={` text-2xl text-white `}>Product Name</div>
          </TableColumn>
          <TableColumn className="bg-primary">
            <div className={` text-2xl text-white `}>Price</div>
          </TableColumn>
          <TableColumn  className="bg-primary">
            <div className={` text-2xl text-white text-center`}>Rating</div>
          </TableColumn>
      </TableHeader>
      <TableBody emptyContent={<div className="h-full">No more content</div>}>
        {dashboardCustomerRow.map((item) => (
          <TableRow key={item.key}>
            <TableCell className="text-xl">
              <CustomerComment item={item.customers} />
            </TableCell>
            <TableCell className="text-[1.4rem]">{item.product}</TableCell>
            <TableCell className="text-[1.4rem]">{item.price}</TableCell>
            <TableCell className="text-[1.4rem] text-center">
              {item.productRating}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DashboardTable;
