"use client";
const ButtonCateSlider = ({ side }) => {
  return (
    <p
      className={` cursor-pointer icon absolute z-20 flex items-center h-full ${
        side == "left"
          ? "left-0 top-0 justify-start"
          : "right-0 top-0 justify-end"
      }   w-[6rem]`}
    >
      <svg
        onClick={() => {
          const wrapper = document.getElementById("category");
          if (side == "left") wrapper.scrollLeft -= 250;
          if (side == "right") wrapper.scrollLeft += 250;
        }}
        xmlns="http://www.w3.org/2000/svg"
        className={`ionicon size-[4rem] p-4 border border-black/10 bg-white flex items-center justify-center rounded-full ${
          side == "left" ? "rotate-180" : ""
        }`}
        viewBox="0 0 512 512"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M184 112l144 144-144 144"
        />
      </svg>
    </p>
  );
};

export default ButtonCateSlider;
