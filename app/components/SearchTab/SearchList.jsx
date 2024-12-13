"use client";
import { useHistoryStore } from "@/app/store/historySearch";
import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchList = ({ data }) => {
  const { setHistory, setSearchFor } = useHistoryStore();
  return (
    <Link
      onClick={() => {
        setHistory(data?.service_name || data?.shopName);
        setSearchFor("");
      }}
      href={`/view/${
        data?.shopType.shopType == "seller" ? "shop" : "service"
      }/${data?.shopId}`}
      id="search-tab"
      className=" grid grid-cols-[auto_1fr] gap-10 z-10 group overflow-visible after:z-[-1] cursor-pointer relative after:absolute after:duration-300 hover:after:scale-[1.2] after:inset-0 after:hover:bg-bg after:content-['']"
    >
      <Image
        width={1000}
        height={1000}
        alt="product img"
        priority
        src={getPhoto(data?.shopProfileImg)}
        className="size-[7rem] rounded-[.8rem] duration-300 object-cover"
      />
      <section className="w-full flex flex-col gap-3">
        <p className="text-normal flex justify-between font-medium capitalize">
          <span>{data?.shopName || data?.service_name}</span>
          <span className="flex capitalize gap-2 items-center text-[1rem] group-hover:bg-primary group-hover:text-white duration-300 bg-bg py-1 px-6 rounded-full">
            {data?.shopType.shopType}
          </span>
        </p>
        <p className="text-small_title">
          {data?.shop_name || data?.service_provider_name}
        </p>
      </section>
    </Link>
  );
};

export default SearchList;
