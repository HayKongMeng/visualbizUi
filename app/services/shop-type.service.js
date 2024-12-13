import { reqHeader } from "../config/header.config";

/**
 * 1
 * get all shop type
 * @returns {object} payload
 */
export const getShopType = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL_V2}/v1/shop-type`,
    {
      headers,
    },
    {
      next: {
        tag: ["getShopType"],
      },
    }
  );
  const data = await res.json();
  return data;
};
