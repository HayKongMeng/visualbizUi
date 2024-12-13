"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const BookmarkFilterButton = ({ data, setCurrentSection }) => {
  const [active, setActive] = useState(0);
  const getClasses = (currentIdx, cpIdx) => {
    let classes =
      "hover:bg-[#F3F4F6]/[.5]  duration-300 text-normal relative z-10 font-semibol cursor-pointer small-btn rounded-small ";
    return currentIdx == cpIdx
      ? classes + " border border-transparent  text-white "
      : classes + " border border-black/10 ";
  };

  return (
    <>
      {bookmarkBtnData.map((cate, idx) => (
        <section
          key={idx}
          onClick={() => {
            setActive(idx);
            setCurrentSection({ idx, cate });
          }}
          className={getClasses(idx, active)}
        >
          <span className={idx === active ? "text-white" : ""}>{cate}</span>
          {idx === active && (
            <motion.section
              layoutId="filterButtonBookmark"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className={`absolute z-[-1] inset-0 bg-primary rounded-small `}
            />
          )}
        </section>
      ))}
    </>
  );
};

export default BookmarkFilterButton;

const bookmarkBtnData = ["All", "Products", "Services", "Event"];
