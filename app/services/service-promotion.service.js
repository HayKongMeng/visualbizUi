import { reqHeader } from "../config/header.config";

/**
 * 1
 * post promotion service (service provider)
 * @param {object} service_promotion_obj object service promotion
 * @returns {object} payload
 */
export const postServicePromotion = async ({
  promotionTitle,
  percentage,
  promotionDescription,
  startDate,
  endDate,
  services,
}) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL_V2}/v1/serviceprovider`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        promotionTitle,
        percentage,
        promotionDescription,
        startDate,
        endDate,
        services,
      }),
    },
    {
      next: {
        tag: ["postServicePromotion"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};
