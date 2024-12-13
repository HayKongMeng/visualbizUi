"use server";

import { revalidateTag } from "next/cache";
import {
  bookmarkEventById,
  bookmarkProduct,
  bookmarkServiceById,
} from "../services/bookmark.service";

export const bookmarkPro = (productId) => {
  bookmarkProduct(productId);
  revalidateTag("getAllProductsBookmark");
};

export const bookmarkEvent = async (eventId) => {
  await bookmarkEventById(eventId);
  revalidateTag("getAllEventsBookmark");
};

export const bookmarkService = async (serviceId) => {
  await bookmarkServiceById(serviceId);
  revalidateTag("getAllServicesBookmark");
};
