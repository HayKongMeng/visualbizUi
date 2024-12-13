import Image from "next/image";
import React from "react";

const AddToCartButton = ({ idx, id }) => {
  console.log("idx", idx);
  return (
    <label
      htmlFor={"my_modal_" + idx}
      className="size-[4rem] cursor-pointer rounded-full p-[1rem] bg-primary flex justify-center items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon stroke-white stroke-[1.5] "
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M256 112v288M400 256H112"
        />
      </svg>
    </label>
  );
};

export default AddToCartButton;

//  <label htmlFor="my_modal_6" className="btn">
//    open modal
//  </label>;
