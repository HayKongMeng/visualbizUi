import React from "react";

function ThreeDotted() {
  return (
    <section className="w-[18px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <circle
          cx="256"
          cy="256"
          r="32"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="416"
          cy="256"
          r="32"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="96"
          cy="256"
          r="32"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    </section>
  );
}

export default ThreeDotted;
