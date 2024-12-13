import React from "react";

function ImportIcon() {
  return (
    <div className="w-[25px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          d="M336 336h40a40 40 0 0040-40V88a40 40 0 00-40-40H136a40 40 0 00-40 40v208a40 40 0 0040 40h40"
          fill="none"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <path
          fill="none"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M176 240l80-80 80 80M256 464V176"
        />
      </svg>
    </div>
  );
}

export default ImportIcon;
