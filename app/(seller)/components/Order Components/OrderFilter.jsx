"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import SelectIcon from "../Icons/SelectIcon";
import SelectedIcon from "../Icons/SelectedIcon";

function OrderFilter() {
  return (
    <Select
      label="Filter"
      labelPlacement="outside"
      className="max-w-xs"
      // defaultOpen= {true}
      // defaultSelectedKeys={1}
      classNames={{label: "text-[2rem] ",value:"rounded-0 text-[1.6rem]", innerWrapper: "p-5"}}
      size="lg"
      radius="sm"
      disableSelectorIconRotationclassName="max-w-xs"
      selectorIcon={<div className="flex  items-center ml-[1rem] w-full"><SelectIcon/></div>}
    >
      <SelectItem
      selectorIcon={<div className="flex justify-end items-center ml-5 w-full"><SelectedIcon/></div>}
      classNames={{ base: "text-[1.8rem]  rounded-0", title: "py-2 text-[1.2rem] rounded-xl" }}
        className="text-[1.8rem] rounded-xl"
      >
        Name
      </SelectItem>
    </Select>
  );
}

export default OrderFilter;
