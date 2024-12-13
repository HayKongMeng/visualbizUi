"use server";
import { revalidateTag } from "next/cache";
import { bookService } from "../services/book.service";

export const bookServiceAction = async ({
  shop = 1,
  serviceId = [2147483647],
  startDate = ["2024-06-26T06:57:50.254Z"],
  endDate = ["2024-06-26T06:57:50.254Z"],
}) => {
  console.log("action booking : ", shop, serviceId, startDate, endDate);

  await bookService({
    shop,
    serviceId,
    startDate,
    endDate,
  });

  revalidateTag("bookService");
};
