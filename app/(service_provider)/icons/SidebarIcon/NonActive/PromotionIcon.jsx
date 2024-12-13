import React from "react";

function PromotionIcon() {
  return (
    <section className="w-[25px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          d="M35.42 188.21l207.75 269.46a16.17 16.17 0 0025.66 0l207.75-269.46a16.52 16.52 0 00.95-18.75L407.06 55.71A16.22 16.22 0 00393.27 48H118.73a16.22 16.22 0 00-13.79 7.71L34.47 169.46a16.52 16.52 0 00.95 18.75zM48 176h416"
          fill="none"
          // stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <path
          fill="none"
          // stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M400 64l-48 112-96-128M112 64l48 112 96-128M256 448l-96-272M256 448l96-272"
        />
      </svg>
    </section>
  );
}

export default PromotionIcon;
