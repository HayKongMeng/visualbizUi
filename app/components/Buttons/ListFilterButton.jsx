"use client";
import { listFilterCategory } from "@/app/data/categoriesList";
import { useStore } from "@/app/store/store";
import { motion } from "framer-motion";
import React from "react";

const ListFilterButton = () => {
  const { categoryFilter, setCategoryFilter } = useStore();

  const getClasses = (currentCate, categoryFilter) => {
    let classes =
      "hover:bg-[#F3F4F6]/[.5]  duration-300 text-normal relative z-10 font-semibol cursor-pointer small-btn rounded-small ";
    return currentCate == categoryFilter
      ? classes + " border border-transparent  text-white "
      : classes + " border border-black/10 ";
  };

  return (
    <>
      {listFilterCategory.map((cate, idx) => (
        <section
          key={idx}
          onClick={() => {
            setCategoryFilter(cate);
          }}
          className={getClasses(cate, categoryFilter)}
        >
          <span className={cate === categoryFilter ? "text-white" : ""}>
            {cate}
          </span>
          {cate === categoryFilter && (
            <motion.section
              layoutId="filterButton"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className={`absolute z-[-1] inset-0 bg-primary rounded-small `}
            />
          )}
        </section>
      ))}
    </>
  );
};

export default ListFilterButton;
