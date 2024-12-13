import React from "react";

function ScheduleIcon() {
  return (
    <section className="w-[25px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <rect
          fill="none"
          // stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
          x="48"
          y="80"
          width="416"
          height="384"
          rx="48"
        />
        <path
          fill="none"
          // stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
          stroke-linecap="round"
          d="M128 48v32M384 48v32"
        />
        <rect
          fill="none"
          // stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
          stroke-linecap="round"
          x="112"
          y="224"
          width="96"
          height="96"
          rx="13"
        />
        <path
          fill="none"
          // stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="32"
          stroke-linecap="round"
          d="M464 160H48"
        />
      </svg>
    </section>
  );
}

export default ScheduleIcon;
