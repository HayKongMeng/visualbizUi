import { create } from "zustand";

export const useHistoryStore = create((set) => ({
  searchFor: "",
  setSearchFor: (search) =>
    set({
      searchFor: search,
    }),
  searchHistory: [],
  setHistory: (new_histroy) =>
    set((state) => ({
      searchHistory: [...state.searchHistory, new_histroy],
    })),
  setDeleteHistory: (oldHistory) =>
    set((state) => ({
      searchHistory: state.searchHistory.filter(
        (search) => search != oldHistory
      ),
    })),
  setDeleteAllHistory: () => set({ searchHistory: [] }),
}));
