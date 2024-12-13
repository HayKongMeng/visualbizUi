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
import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import HistoryCustomer from "./HistoryCustomer";

function HistoryTable({ columns, filteredItems }) {
  return (
    <Table
    isHeaderSticky
    // topContent={topContent}
    removeWrapper
    topContentPlacement="outside"
    classNames={{
      wrapper: "bg-bg",
      // base: "max-h-[80rem]",
      // base: " max-h-[80rem]",
      base: "max-h-[200rem] bg-bg overflow-y-scroll ",
      // table: "h-[30rem]  overflow-y-scroll",
    }}
    aria-label="History Table"
  >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key} className="bg-primary">
            <div className="text-2xl text-left text-white">
              {column.label}
            </div>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={<div className="h-full">No more content</div>}>
        {filteredItems.map((item) => (
          <TableRow key={item.key}>
            <TableCell>
             <HistoryCustomer item={item.customers_history}/>
            </TableCell>
            <TableCell>
              <div className="text-[1.4rem] ">{item.order_no_history}</div>
            </TableCell>
            <TableCell>
              <div className="text-[1.4rem] ">{item.amount_history}</div>
            </TableCell>
            <TableCell>
              <div className="text-[1.4rem] ">{item.date_history}</div>
            </TableCell>
            <TableCell>
              <div className="text-[1.4rem] ">{item.status_history}</div>
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default HistoryTable;
