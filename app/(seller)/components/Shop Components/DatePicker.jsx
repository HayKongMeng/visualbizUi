"use client";
import { RangeCalendar } from "@nextui-org/calendar";
import React from "react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function DatePicker() {
  const [selected, setSelected] = useState();
  return (
    <div className="">
      <DayPicker
        className="border bg-white  h-[35rem] p-5 mx-auto"
        mode="range"
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}

export default DatePicker;
