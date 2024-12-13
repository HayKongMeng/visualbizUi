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
  Spinner,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import AddProductModal from "./AddProductModal";
import SellerProductTab from "./SellerProductTab";
import SellerProductDropdown from "./SellerProductDropdown";
import { productRows, productsColumns } from "../data/data";
import TableData from "./TableData";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

function TableComp({ data }) {
  console.log("data", data);
  const [filterValue, setFilterValue] = React.useState("");
  const hasSearchFilter = Boolean(filterValue);

  const rows = data;
  const columns = productsColumns;
  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...rows];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((row) =>
        row.productName.toLowerCase().includes(filterValue.toLowerCase())
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

  const { data: session } = useSession();
  async function getProductsTabs() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/category?page=1&size=4`,
      {
        // method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );
    const data = await res.json();
    return data.payload;
  }

  const {
    data: productTab = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["productTabs"],
    queryFn: getProductsTabs,
  });
  console.log(data, "tabs data");

  if (isError) {
    return (
      <div className="flex h-full justify-center items-center border font-bold">
        There an error while fetching tabs data
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        <div className="flex h-full justify-center items-center border">
          <Spinner label="Loading....." color="primary" size="lg" />{" "}
        </div>
      ) : ( 
        <div className="flex items-center flex-col w-full mt-10">
          {/* <SellerProductTab /> */}
          <div className="flex items-center  gap-5   self-end">
            <div>
              <Input
                classNames={{
                  input: "text-[1.2rem]",
                  inputWrapper: "py-4 h-[3.9rem] w-[25rem]  overflow-y-hidden",
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

            <div className="">
              <AddProductModal />
            </div>
          </div>
          <div className="w-full h-full">
            <SellerProductTab columns={columns} filteredItems={filteredItems} />
          </div>
        </div>
      )}
    </>
  );
}

export default TableComp;
