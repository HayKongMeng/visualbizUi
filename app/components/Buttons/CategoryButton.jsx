"use client";
import { categoriesList } from "@/app/data/categoriesList";
import { useStore } from "@/app/store/store";
import React from "react";
import { motion } from "framer-motion";
const CategoryButton = ({ allCategories }) => {
  const { category, setCategory, categoryFilter } = useStore();

  const getClasses = (currentCate, categoryName) => {
    let classes =
      "hover:bg-[#F3F4F6]/[.5]  duration-300 text-normal relative z-10 font-semibol cursor-pointer small-btn rounded-small ";
    return currentCate == categoryName
      ? classes + " border border-transparent  text-white "
      : classes + " border border-black/10 ";
  };

  return (
    <>
      {allCategories
        // .filter(
        //   (cate) =>
        //     cate.categoryName.toLowerCase() !== "string" &&
        //     cate.categoryName.length < 10
        // )
        .map(({ categoryName }, idx) => (
          <section
            key={idx}
            onClick={() => {
              setCategory(categoryName);
            }}
            className={getClasses(categoryName, category)}
          >
            <span
              className={
                categoryName === category
                  ? "text-white capitalize"
                  : " capitalize"
              }
            >
              {categoryName}
            </span>
            {categoryName === category && (
              <motion.section
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={`absolute z-[-1] inset-0 bg-primary rounded-small `}
              />
            )}
          </section>
        ))}
    </>
  );
};

export default CategoryButton;
