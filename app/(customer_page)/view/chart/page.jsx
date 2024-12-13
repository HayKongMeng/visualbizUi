"use client";
import React from "react";
import dynamic from "next/dynamic";
import { title } from "process";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PageChart = () => {
  // chart
  const optionscolumnchart = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 370,
    },
    colors: ["rgba(93, 135, 255, 0.85)", "#393939"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "42%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },

    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 5,
    },
    xaxis: {
      categories: ["16/08", "17/08", "18/08", "19/08", "20/08"],
      axisBorder: {
        show: false,
      },
    },
    // tooltip: {
    //   theme: "white",
    //   fillSeriesColor: true,

    // },
  };
  const seriescolumnchart = [
    {
      name: "Eanings this month",
      data: [355, 390, 300, 350, 390],
    },
    {
      name: "Expense this month",
      data: [280, 250, 325, 215, 250],
    },
  ];
  return (
    <div className=" h-full p-10 text-white bg-white rounded-2xl shadow-sm">
      <Chart
        options={optionscolumnchart}
        series={seriescolumnchart}
        type="bar"
        height={350}
        width={"100%"}
      />
    </div>
  );
};

export default PageChart;
