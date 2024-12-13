import React from "react";
import { motion } from "framer-motion";
import SearchLabel from "../Labels/SearchLabel";
import SearchList from "./SearchList";
import Image from "next/image";
import ListSearchLabel from "../Labels/ListSearchLabel";
import { searchDatas } from "@/app/data/dummy_search_data";
import RemoveAllSearch from "../Buttons/RemoveAllSearch";

const SearchTab = ({ searchFor, allShops }) => {
  const filterData = allShops?.filter((data) => {
    return (
      data?.shopName?.toLowerCase().includes(searchFor.toLowerCase()) ||
      data?.service_name?.toLowerCase()?.includes(searchFor?.toLowerCase())
    );
  });

  return (
    <motion.section
      id="hide-scrollbar"
      className={`w-[50rem] scale-x-[.6] p-10 duration-[250ms] search-tab border ${
        searchFor.length >= 1
          ? "opacity-1 h-[55rem] !scale-x-[1]"
          : "opacity-0  pointer-events-none h-0"
      }  z-[100] translate-y-[1rem] overflow-y-scroll overflow-x-hidden bg-white  rounded-large absolute left-[50%]  translate-x-[-50%]`}
    >
      <section className="search-history flex flex-col gap-4">
        <section className="flex justify-between">
          <span className="text-normal font-semibold">History</span>
          <RemoveAllSearch />
        </section>
        <ListSearchLabel />
      </section>
      <hr className="my-sm_margin" />
      <section className="search-history">
        <p className="text-normal mb-4 font-semibold">Results</p>
        <section className="flex flex-col gap-6">
          {filterData?.length >= 1 &&
            filterData?.map((data, idx) => (
              <SearchList key={idx} data={data} />
            ))}
          {filterData?.length <= 0 && (
            <section className="mx-auto flex flex-col gap-3 justify-center items-center p-10">
              <Image
                width={1000}
                height={1000}
                alt="product img"
                src="/images/empty-picture.png"
                className="h-[20rem]  group-hover:scale-[1.3] duration-300"
              />
              <p className="text-danger text-description font-semibold">
                Could not find any products or services
              </p>
            </section>
          )}
        </section>
      </section>
    </motion.section>
  );
};

export default SearchTab;
