import React from "react";

function SelectedIcon() {
  return (
    <div className="w-[15px] flex justify-end items-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M416 128L192 384l-96-96"
        />
      </svg>
    </div>
  );
}

export default SelectedIcon;
