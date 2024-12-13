import { create } from "zustand";
export const useOrderCountStore = create((set) => ({
  orderCount: 0,
  setOrderCount: () => set((state) => ({ orderCount: state.orderCount + 1 })),
  desCount: () => set((state) => ({ orderCount: state.orderCount - 1 })),
}));
