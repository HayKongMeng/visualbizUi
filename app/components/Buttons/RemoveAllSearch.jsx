"use client";
import { useHistoryStore } from "@/app/store/historySearch";
import React from "react";

const RemoveAllSearch = () => {
  const { setDeleteAllHistory, searchHistory } = useHistoryStore();
  if (searchHistory.length <= 0) return;
  return (
    <span onClick={setDeleteAllHistory} className="cursor-pointer text-danger">
      Clear History
    </span>
  );
};

export default RemoveAllSearch;
