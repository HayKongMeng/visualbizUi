"use client";

import SearchTab from "../SearchTab/SearchTab";
import { useHistoryStore } from "@/app/store/historySearch";

const SearchBar = ({ allShops }) => {
  const { searchFor, setSearchFor } = useHistoryStore();
  return (
    <main className="relative">
      <label htmlFor="searchSomething">
        <input
          autoComplete="off"
          type="text"
          name="searchSomething"
          placeholder="search something"
          value={searchFor}
          onChange={(e) => setSearchFor(e.target.value)}
          className="bg-light_gray rounded-full py-3 px-6 text-mid focus:outline-none w-[50rem]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon absolute top-1/2 right-0 size-[2rem]  stroke-dark_gray  -translate-x-1/2 -translate-y-[50%]"
          viewBox="0 0 512 512"
        >
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            // stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
          <path
            fill="none"
            // stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
      </label>
      <SearchTab searchFor={searchFor} allShops={allShops} />
    </main>
  );
};

export default SearchBar;
