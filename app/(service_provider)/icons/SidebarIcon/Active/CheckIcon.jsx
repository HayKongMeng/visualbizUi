import React from "react";

function CheckIcon({ width = "25px", height = "25px" }) {
  return (
    <div style={{ width, height }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
        width={width}
        height={height}
      >
        <path
          d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
          fill="none"
          stroke="#46E055"
          stroke-miterlimit="10"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="#46E055"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M352 176L217.6 336 160 272"
        />
      </svg>
    </div>
  );
}

export default CheckIcon;
