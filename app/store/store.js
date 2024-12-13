import { create } from "zustand";

export const useStore = create((set) => ({
  category: "All",
  setCategory: (currentCategory) => {
    set({ category: currentCategory });
  },
  categoryFilter: "All",
  setCategoryFilter: (currentCategory) => {
    set({ categoryFilter: currentCategory });
  },

  location_search: "",
  setLocation: (new_location) => {
    set({ location_search: new_location });
  },

  currentLocation: "Choose Location",
  setCurrentLocation: (new_location) => {
    set({ currentLocation: new_location });
  },

  aboutUsLink: "About",
  setLinkAboutUs: (currentLink) => {
    set({ aboutUsLink: currentLink });
  },
  lastTimeClick: 0,
  setLastTimeClicked: (newTime) => set({ lastTimeClick: newTime }),
}));
