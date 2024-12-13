import React from "react";

function ActiveEventIcon() {
  return (
    <div className="w-[25px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z"
          fill="none"
          stroke="black"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <rect
          x="64"
          y="160"
          width="384"
          height="112"
          rx="32"
          ry="32"
          fill="none"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <path
          d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304"
          fill="none"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
      </svg>
    </div>
  );
}

export default ActiveEventIcon;
