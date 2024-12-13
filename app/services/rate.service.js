import { reqHeader } from "../config/header.config";

/**
 * 1
 * get all rate and feedback
 * @returns {object} payload
 */
export const getAllRateFeedback = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL_V2}/rate-feedback`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllRateFeedback"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 2
 * post rate on order
 * @param {object} ratefeedback object of rate feedback
 * @returns {object} payload
 */
export const postRateOnOrder = async ({ feedback, rate, orderId }) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL_V2}/rate-feedback`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        feedback,
        rate,
        orderId,
      }),
    },
    {
      next: {
        tag: ["postRateOnOrder"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

export const getRateFeedbackByShopId = async (shopId) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/rate-feedback/shop/${shopId}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getRateFeedbackByShopId"],
      },
    }
  );

  const { payload } = await res.json();

  return payload;
};

export const getAvgRatingByShopId = async (shopId) => {
  try {
    const headers = await reqHeader();

    const res = await fetch(
      `${process.env.BASE_URL}/shop/rating/service/shop/${shopId}`,
      {
        headers,
      }
    );

    const {
      payload: { shopRating },
    } = await res.json();

    return shopRating;
  } catch (error) {}
};
