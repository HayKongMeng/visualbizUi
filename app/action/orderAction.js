"use server";

import { revalidateTag } from "next/cache";
import { postOrderProduct } from "../services/order.service";

export const postOrderPro = async ({
  orderAddress,
  shop,
  productId, // array of id
  qty, // array of qty
}) => {
  postOrderProduct({
    orderAddress,
    shop,
    productId: [...productId], // array of id
    qty: [...qty], // array of qty
  });
  revalidateTag("getOrderAction");
};
