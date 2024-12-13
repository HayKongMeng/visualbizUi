"use client";
import SearchLabel from "./SearchLabel";
import { useHistoryStore } from "@/app/store/historySearch";

const ListSearchLabel = () => {
  const { searchHistory, setSearchFor } = useHistoryStore();
  if (searchHistory.length <= 0)
    return <span className="text-center">No history</span>;
  return (
    <section className="flex gap-6 flex-wrap">
      {searchHistory.length >= 1 ? (
        searchHistory.map((search, idx) => (
          <section
            key={idx}
            className="relative rounded-full group"
            onClick={() => setSearchFor(search)}
          >
            <SearchLabel title={search} />
          </section>
        ))
      ) : (
        <p>No search history</p>
      )}
    </section>
  );
};

export default ListSearchLabel;
