import { reqHeader } from "../config/header.config";

export const getAllShopNearbyLocation = async (lat = 1, lon = 1) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/findNearestLocation/findNearestLocation?lat=${lat}&longitude=${lon}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllShopNearbyLocation"],
      },
    }
  );

  const { payload } = await res.json();
  return payload;
};
