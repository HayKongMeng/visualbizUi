import next from "next";
import { reqHeader } from "../config/header.config";


/**
 * 1
 * get  category by name
 * @param {string} cateName cate name for searching
 * @returns {object} payload
 */
export const getCategoryByName = async (cateName) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/category/name/${cateName}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getCategoryByName"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 2
 * get all categories by shop id
 * @param {number} shop_id shop's id
 * @returns {object} payload
 */
export const getAllCateByShopId = async (shop_id) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/category/categoryInShop/${shop_id}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllCateByShopId"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 3
 * get all categories
 * @param {number} shop_id shop's id
 * @returns {object} payload
 */
export const getAllCategories = async (page = 1, size = 100) => {
  try {
    const headers = await reqHeader();
    const res = await fetch(
      `${process.env.BASE_URL}/category?page=${page}&size=${size}`,
      {
        headers,
      },
      {
        next: {
          tag: ["getAllCategories"],
        },
      }
    );
    const { payload } = await res.json();
    return payload;
  } catch (error) {
    throw new Error("Something wrong");
  }
};

/**
 * 4
 * get category by cate id
 * @param {number} cateId cate's id
 * @returns {object} payload
 */
export const getCateById = async (cateId) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/category/${cateId}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getCateById"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

// //post category
export const postCategory = async (category_data) =>{
  const headers = await reqHeader();
  // const{ categoryName } = category_data;
  const res = await fetch (
    `${process.env.BASE_URL}/category`,
    {
      headers,
      method: "POST",
      body: JSON.stringify({
        categoryName : "sport"
      }),
    },
    {
      next :{
        tag: ["postCategory"]
      }
    }
  );
  const {payload} = await res.json();
  return payload;
}

// // //update category
export const updateCategoryById = async (category_id) =>{
  const headers = await reqHeader();
  //const {categoryName}
const res = await fetch(
  `${process.env.BASE_URL}/category/${category_id}`,
  {
    method: "PUT",
    headers,
    body: JSON.stringify({
      categoryName: "hello",
    }),
  },
  {
    next:{
      tag:["updateEventById"]
    },
  }
);
const {payload} = await res.json();
return payload;
}

