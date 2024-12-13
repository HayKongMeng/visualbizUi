import { reqHeader } from "../config/header.config";

export const bookService = async ({
  shop = 1,
  serviceId = [2147483647],
  startDate = ["2024-06-26T06:57:50.254Z"],
  endDate = ["2024-06-26T06:57:50.254Z"],
}) => {
  console.log("action booking : ", shop, serviceId, startDate, endDate);

  try {
    const headers = await reqHeader();
    const res = await fetch(
      `${process.env.BASE_URL}/book`,
      {
        headers,
        method: "POST",
        body: JSON.stringify({
          shop,
          serviceId,
          startDate,
          endDate,
        }),
      },
      {
        next: {
          tag: [bookService],
        },
      }
    );
    console.log("status", res.status);
    const { payload } = await res.json();
    return payload;
  } catch (error) {
    console.log(error);
  }
};

export const getAllBooking = async () => {
  try {
    const headers = await reqHeader();
    const res = await fetch(`${process.env.BASE_URL}/book`, {
      headers,
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getBookById = async (bookId) => {
  try {
    const headers = await reqHeader();
    const res = await fetch(`${process.env.BASE_URL}/book/${bookId}`, {
      headers,
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
