import { create } from "zustand";

export const useServiceStore = create((set) => ({
  serviceList: [],
  setServiceList: (newService) =>
    set((state) => ({
      serviceList: [...state.serviceList, newService],
    })),
}));
