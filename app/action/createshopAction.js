"use server";

import { revalidateTag } from "next/cache";
import { createNewShop } from "../services/shop.service";

export const createShopAction = async (data, lat, lon) => {
  await createNewShop(data, lat, lon);
  revalidateTag("shop");
};
