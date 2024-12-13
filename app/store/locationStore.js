import { create } from "zustand";

export const useLocationStore = create((set) => ({
  current_user_location: "Choose Location", // first time location
  setCurrentUserLocation: (current_user_location) =>
    set({ current_user_location }),

  foundLocation: [], // array of found locations
  setFoundLocation: (obj) => set({ foundLocation: [...obj] }), // set to found location array

  location: {},
  setLocationWhenGetData: (location) =>
    set({
      location,
    }),
}));
