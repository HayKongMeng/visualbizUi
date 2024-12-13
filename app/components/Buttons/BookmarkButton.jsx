"use client";
import { setToast } from "@/app/utils/util_function";
import React, { useState } from "react";

const BookmarkButton = ({
  type = "shop" | "service",
  idx = "999",
  id,
  fn,
  isBookmark = false,
}) => {
  const [isClicked, setClicked] = useState(false);
  return (
    <button
      onClick={(e) => {
        if (!isBookmark) {
          // if (!isClicked) setToast("success", "🔖 Add to bookmark successfully");
          console.log("type and idx : ", type, idx, id);
          setClicked(!isClicked);
          if (fn) {
            fn(id);
            setToast("success", "Add to Bookmark");
          }
        } else setToast("error", "Already bookmark");
      }}
      className="size-[3.4rem] shadow-sm rounded-full p-[1rem] bg-white backdrop-blur-md flex justify-center items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`ionicon size-8 ${
          isBookmark
            ? "stroke-none fill-secondary"
            : "stroke-black fill-none stroke-[1.5]"
        }`}
        viewBox="0 0 512 512"
      >
        <path
          d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z"
          // fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="50"
        />
      </svg>
    </button>
  );
};

export default BookmarkButton;
