import { revalidateTag } from "next/cache";
import { reqHeader } from "../config/header.config";

/**
 * 1
 * seller deny order
 * @param {number} orderId orderId
 * @returns {object} payload
 */
export const denyOrder = async (orderId) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/order/order/deny/${orderId}`,
    {
      method: "PUT",
      headers,
    },
    {
      next: {
        tag: ["denyOrder"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 2
 * seller delivery order
 * @param {number} orderId orderId
 * @returns {object} payload
 */
export const deliveryOrder = async (orderId) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL_V2}/order/order/delivery/${orderId}`,
    {
      method: "PUT",
      headers,
    },
    {
      next: {
        tag: ["deliveryOrder"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 3
 * seller accept order
 * @param {number} orderId orderId
 * @returns {object} payload
 */
export const acceptOrder = async (orderId) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/order/order/accept/${orderId}`,
    {
      method: "PUT",
      headers,
    },
    {
      next: {
        tag: ["acceptOrder"],
      },
    }
  );
  const { payload } = await res.json();
  console.log("res order seller:", payload);
  return payload;
};

/**
 * 4
 * get all order
 * @returns {object} payload
 */
export const getAllOrder = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/order`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllOrder"],
      },
    }
  );
  const { payload } = await res.json();
  console.log("OrderService", payload);
  return payload;
};

/**
 * 5
 * post order product
 * @returns {object} payload
 */
export const postOrderProduct = async ({
  orderAddress,
  shop,
  productId, // array of id
  qty, // array of qty
}) => {
  console.log(
    "Data post order : ",
    orderAddress,
    shop,
    productId, // array of id
    qty // array of qty
  );
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/order`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        orderAddress,
        shop,
        productId,
        qty,
      }),
    },
    {
      next: {
        tag: ["postOrderProduct"],
      },
    }
  );
  const { payload } = await res.json();
  revalidateTag("getOrderAction");
  return payload;
};

/**
 * 6
 * getOrderbyid
 * @param {number} orderId orderId
 * @returns {object} payload
 */
export const getOrderById = async (orderId) => {
  console.log(orderId);
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/order/${orderId}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getOrderById"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 7
 * getOrder history
 * @returns {object} payload
 */
export const getOrderHistory = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/order/customer/history`,
    {
      headers,
    },
    {
      next: {
        tag: ["getOrderHstory"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 7
 * getOrder history
 * @returns {object} payload
 */
export const getOrderAction = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/order/action`,
    {
      headers,
    },
    {
      next: {
        tag: ["getOrderAction"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};
