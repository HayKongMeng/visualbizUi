import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";

const NotFound = ({ title = "Not Found" }) => {
  return (
    <div className={" flex flex-col gap-10 items-center justify-center"}>
      <Image
        src={"/images/4004.png"}
        width={1000}
        height={1000}
        priority
        alt="not found images"
        className="w-full object-cover "
      />
      <Link
        href={"../"}
        className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
      >
        {title}
      </Link>
    </div>
  );
};

export default NotFound;
