import { create } from "zustand";

export const authInfoGlobal = create((set) => ({
  username: "",
  email: "",
  setUsername: (newValue) => set({ username: newValue }),
  setEmail: (newValue) => set({ email: newValue }),
}));
