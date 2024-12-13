import Image from "next/image";
import React from "react";

function BackIcon() {
  return (
    <span>
      <Image
        src="/back-right.svg"
        alt="Back Butotn Icon"
        width={30}
        height={30}
      />
    </span>
  );
}

export default BackIcon;
