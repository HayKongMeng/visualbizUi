import { reqHeader } from "../config/header.config";

/**
 * 1
 * get all popular shop
 * @returns {object} payload
 */
export const getAllPopularShop = async () => {
  try {
    const headers = await reqHeader();
    const res = await fetch(
      `http://localhost:8080/api/v1/shop/popular/product/shop`,
      {
        headers,
      },
      {
        next: {
          tag: ["getAllRateFeedback"],
        },
      }
    );
    const { payload } = await res.json();
    return payload;
  } catch (error) {
    throw new Error("Something wrong");
  }
};
