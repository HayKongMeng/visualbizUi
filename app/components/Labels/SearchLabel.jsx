import { useHistoryStore } from "@/app/store/historySearch";
import React from "react";

const SearchLabel = ({ title }) => {
  const { setDeleteHistory } = useHistoryStore();
  return (
    <p className="inline-block capitalize  duration-300 cursor-pointer hover:bg-primary bg-bg rounded-full">
      <span className="flex items-center gap-4 text-mid group-hover:text-whit   py-2 px-[2rem]">
        <span className="relative z-10 group-hover:!text-white">{title}</span>
        <span>
          <svg
            onClick={(e) => {
              e.stopPropagation();
              setDeleteHistory(title);
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon size-[2rem] stroke-primary group-hover:!stroke-white"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              //   stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </span>
      </span>
    </p>
  );
};

export default SearchLabel;
