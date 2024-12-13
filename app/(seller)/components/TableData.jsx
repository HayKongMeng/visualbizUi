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
import SellerProductDropdown from "./SellerProductDropdown";
import Image from "next/image";

function TableData({ columns, data }) {
  return (
    <Table
      isHeaderSticky
      removeWrapper
      classNames={{
        wrapper: "bg-bg",
        // base: "max-h-[80rem]",
        // base: " max-h-[80rem]",
        base: " bg-bg overflow-y-scroll ",
        table: "h-[30rem]  overflow-y-scroll",
      }}
      aria-label="Product Data"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key} align="center" className="bg-primary">
            <div className="text-2xl text-center text-white">
              {column.label}
            </div>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        emptyContent={
          <div className="h-full">No product available in the shop</div>
        }
      >
        {data.map((item) => (
          <TableRow key={item.key}>
            <TableCell>
              <div className="text-xl flex justify-center items-center">
                <div className=" w-[60px]  rounded-3xl">
                  <Image
                    className="h-[50px]"
                    src={`/${item.productImg}`}
                    width={1000}
                    height={1000}
                    alt="Product-img"
                  />
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-[1.4rem] text-center">
                {item.productName}
              </div>
            </TableCell>
            <TableCell>
              <div className="text-[1.4rem] text-center">{item.barCode}</div>
            </TableCell>
            <TableCell>
              <div className="text-[1.4rem] text-center">
                {item.category.categoryName}
              </div>
            </TableCell>
            <TableCell>
              <div className="text-[1.4rem] text-center">
                {item?.productQty}
              </div>
            </TableCell>
            <TableCell>
              <div className=" text-center">
                <SellerProductDropdown />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableData;
