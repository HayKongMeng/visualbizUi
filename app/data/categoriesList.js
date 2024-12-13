export const categoriesList = [
  "All",
  "Electronics",
  "Appliances",
  "Clothing",
  "Footwear",
  "Books",
  "Beauty",
  "Baby",
  "Sports",
  "Toys",
  "Groceries",
  "Health",
  "Furniture",
  "Office",
  "Jewelry",
  "Pets",
  "Garden",
  "Music",
  "Kitchen",
  "Automotive",
  "Crafts",
];

export const listFilterCategory = [
  "All",
  "Popular",
  "Promotions",
  "Retailers",
  "Service Providers",
];

export const getAllCategory = (array = []) =>
  Array.from(new Set(array.map((item) => item.category))).sort();
