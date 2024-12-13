const { create } = require("zustand");

export const restock = create(set=> ({
    stock: 10,
    setStock: (newValue) => set({ stock: newValue}),
}))
