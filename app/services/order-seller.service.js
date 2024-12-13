import { revalidateTag } from "next/cache";
import { reqHeader } from "../config/header.config";
/**
 * 1
 * get all order seller
 * @returns {object} payload
 */
export const getAllOrderSeller = async () => {
    const headers = await reqHeader();
    // console.log("headers:  ", headers)
    const res = await fetch(
        `${process.env.BASE_URL}/order`,
        {
            headers,
        },
        {
            next: {
                tag: ["getAllOrderSeller"],
            },
        }
    );
    const { payload } = await res.json();
    // console.log("res: ", payload)
    return payload;
};

/**
 * 2
 * getOrder history
 * @returns {object} payload
 */

export const getOrderHistorySeller = async () => {
    const headers = await reqHeader();

    const res = await fetch(
        `${process.env.BASE_URL}/order/seller/history`,
        {
            headers,
        },
        {
            next: {
                tag: ["getOrderHistorySeller"],
            },
        }
    );
    const { payload } = await res.json();
    console.log("res seller: ", payload)
    return payload;
  };