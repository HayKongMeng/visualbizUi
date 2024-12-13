"use client";
import React, { useState } from "react";

function BookmarkIcon({ event }) {
  const [isClicked, setClicked] = useState(false);
  return (
    <section
      className="w-[25px] cursor-pointer"
      onClick={() => setClicked(!isClicked)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`ionicon ${
          isClicked ? "fill-secondary stroke-none" : "stroke-black fill-none"
        }`}
        viewBox="0 0 512 512"
      >
        <path
          d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z"
          // fill="none"
          // stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </section>
  );
}

export default BookmarkIcon;
