import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartList: [],
  storeToCart: (new_list) => {
    console.log("zustand", new_list);
    set((state) => ({
      cartList: [
        ...state.cartList,
        { ...new_list, isCheck: true, id: state.cartList.length + 1 },
      ],
    }));
  },
  setEmpty: () =>
    set({
      cartList: [],
    }),
  deleteStoreCart: (id) =>
    set((state) => ({
      cartList: state.cartList.filter((item) => item.id != id),
    })),

  onChangeChecked: (id) =>
    set((state) => ({
      cartList: state.cartList.filter((item) =>
        item.id == id ? { ...item, isCheck: !item?.isCheck } : item
      ),
    })),
}));
