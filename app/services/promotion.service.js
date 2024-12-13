import { reqHeader } from "../config/header.config";

/**
 * 1
 * get promotion by id
 * @param {number} promotion_id For promotion id
 * @returns {Promise<T>} payload
 */
export const getPromotionById = async (promotion_id) => {
  const headers = await reqHeader();

  const res = await fetch(
    `${process.env.BASE_URL}/promotion/${promotion_id}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getPromotionById"],
      },
    }
  );
  const { payload } = await res.json();
  console.log(payload);
  return payload;
};

/**
 * 2
 * update promotion by id
 * @param {number} promotion_id For promotion id
 * @param {object} new_pro_data new promotion detail
 * @returns {Promise<T>} payload
 */
export const updatePromotionById = async (new_pro_data, promotion_id) => {
  const headers = await reqHeader();
  const {
    promotionTitle,
    percentage,
    promotionDescription,
    startDate,
    endDate,
    productIds,
  } = new_pro_data;
  const res = await fetch(
    `${process.env.BASE_URL}/promotion/${promotion_id}`,
    {
      method: "PUT",
      headers,
      body: JSON.stringify({
        promotionTitle,
        percentage,
        promotionDescription,
        startDate,
        endDate,
        productIds,
      }),
    },
    {
      next: {
        tag: ["getPromotionById"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 3
 * get all promotion
 * @param {number} page For number of page
 * @param {number} size for size of data
 * @returns {Promise<T>} payload
 */
export const getAllPromotions = async (page = 1, size = 8) => {
  const headers = await reqHeader();

  const res = await fetch(
    `${process.env.BASE_URL}/promotion?page=${page}&size=${size}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllPromotions"],
      },
    }
  );
  const { payload } = await res.json();

  console.log(payload);

  const seen = new Set();
  const filterPromotion = payload.filter((el) => {
    const shopId = el.shopId?.shopId;
    if (seen.has(shopId)) {
      return false;
    }
    seen.add(shopId);
    return true;
  });

  return filterPromotion;
};

/**
 * 4
 * post new promotion
 * @param {number} promotion_id For promotion id
 * @param {object} new_pro_data new promotion detail
 * @returns {Promise<T>} payload
 */
export const postPromotion = async (pro_data) => {
  const headers = await reqHeader();
  const {
    promotionTitle,
    percentage,
    promotionDescription,
    startDate,
    endDate,
    productIds,
  } = pro_data;
  const res = await fetch(
    `${process.env.BASE_URL}/promotion`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        promotionTitle,
        percentage,
        promotionDescription,
        startDate,
        endDate,
        productIds,
      }),
    },
    {
      next: {
        tag: ["postPromotion"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 5
 * get promotion by shop id
 * @param {number} page For number of page
 * @param {number} size for size of data
 * @param {number} shop_id For shop id
 * @returns {Promise<T>} payload
 */
export const getPromotionByShopId = async (shop_id, page = 1, size = 9999) => {
  const headers = await reqHeader();

  const res = await fetch(
    `${process.env.BASE_URL}/promotion/shop-id/${shop_id}?page=${page}&size=${size}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getPromotionByShopId"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

//delete promotion by id
export const deletePromotionById = async (promotion_id) => {
  const headers = await reqHeader();
  const res = await fetch(
    `http://localhost:8080/api/v1/promotion/{id}?promotionId=${promotion_id}`,
    {
      method: "DELETE",
      headers,
    },
    {
      next: {
        tag: ["deletePromotionById"],
      },
    }
  );
  const { payload } = res.json();
  console.log(payload);
  return payload;
};
