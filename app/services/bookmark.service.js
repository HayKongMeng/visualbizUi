import { revalidateTag } from "next/cache";
import { reqHeader } from "../config/header.config";

export const bookmarkProduct = async (productId) => {
  const headers = await reqHeader();
  const res = await fetch(`${process.env.BASE_URL}/bookmark`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      productId,
    }),
  });
  revalidateTag("getAllProductsBookmark");
  return await res.json();
};

export const getAllProductsBookmark = async () => {
  const headers = await reqHeader();

  const res = await fetch(`${process.env.BASE_URL}/bookmark/allBookmarks`, {
    headers,
    next: {
      tags: ["getAllProductsBookmark"],
    },
  });
  const { payload } = await res.json();
  return payload;
};

export const getAllEventsBookmark = async () => {
  const headers = await reqHeader();

  const res = await fetch(
    `${process.env.BASE_URL}${encodeURI(`/bookmark/allEventBookmarks`)}
`,
    {
      headers,
      next: {
        tags: ["getAllEventsBookmark"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

export const getAllServicesBookmark = async () => {
  const headers = await reqHeader();

  const res = await fetch(
    `${process.env.BASE_URL}/bookmark/allServiceBookmarks
`,
    {
      headers,
      next: {
        tags: ["getAllServicesBookmark"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

export const bookmarkEventById = async (eventId) => {
  const headers = await reqHeader();
  const res = await fetch(`${process.env.BASE_URL}/bookmark/event`, {
    headers,
    method: "POST",
    body: JSON.stringify({ eventId }),
  });
  return await res.json();
};

export const bookmarkServiceById = async (serviceId) => {
  const headers = await reqHeader();
  const res = await fetch(`${process.env.BASE_URL}/bookmark/service`, {
    headers,
    method: "POST",
    body: JSON.stringify({ serviceId }),
  });
  return await res.json();
};
