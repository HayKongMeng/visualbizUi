import { reqHeader } from "../config/header.config";

/**
 * 1
 * get all shop (customer)
 * @param {number} page For the page size
 * @param {number} size how many we want to show
 * @returns {Promise<T>} payload
 */
export const getAllShops = async (page = 1, size = 8) => {
  try {
    const headers = await reqHeader();

    const res = await fetch(
      `${process.env.BASE_URL}/shop?page=${page}&size=${size}`,
      {
        headers,
      },
      {
        next: {
          tag: ["shop"],
        },
      }
    );
    const { payload } = await res.json();
    return payload;
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * 2
 * seller upload shop cover
 * @param {string} shop_cover for cover of shop
 * @returns {Promise<T>} payload
 */
export const uploadShopCover = async (shop_cover) => {
  const headers = await reqHeader();

  const res = await fetch(
    `${process.env.BASE_URL}/shop`,
    {
      headers,
      method: "PUT",
      body: JSON.stringify({
        shopProfileCover: shop_cover,
      }),
    },
    {
      next: {
        tag: ["shopUploadCover"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 3
 * seller upload shop image
 * @param {string} shop_cover for cover of shop
 * @returns {Promise<T>} payload
 */
export const uploadShopImage = async (shop_img) => {
  const headers = await reqHeader();

  const res = await fetch(
    `${process.env.BASE_URL}/shop/upload-profile`,
    {
      headers,
      method: "PUT",
      body: JSON.stringify({
        shopProfileImg: shop_img,
      }),
    },
    {
      next: {
        tag: ["shopUploadImg"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 4
 * seller update shop info
 * @param {object} new_shop new shop info
 * @returns {Promise<T>} payload
 */
export const updateShopInfo = async (new_shop) => {
  const headers = await reqHeader();
  const { shopName, email, phoneNumber } = new_shop;
  const res = await fetch(
    `${process.env.BASE_URL}/shop/update-shop-info`,
    {
      headers,
      method: "PUT",
      body: JSON.stringify({
        shopName,
        email,
        phoneNumber,
      }),
    },
    {
      next: {
        tag: ["shopUpdateInfo"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 4
 * seller update shop description
 * @param {string} description new shop info
 * @returns {Promise<T>} payload
 */
export const updateShopDes = async (description) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/shop/update-shop-description`,
    {
      headers,
      method: "PUT",
      body: JSON.stringify({
        description,
      }),
    },
    {
      next: {
        tag: ["shopUpdateDes"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 5
 * seller update shop location
 * @param {string} location new shop info
 * @returns {Promise<T>} payload
 */
export const updateShopLocation = async (location) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/shop/update-shop-location`,
    {
      headers,
      method: "PUT",
      body: JSON.stringify({
        location,
      }),
    },
    {
      next: {
        tag: ["shopUpdateLoc"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 6
 * seller post day off
 * @param {Date} startDate startDate
 * @param {Date} endDate endDate
 * @returns {Promise<T>} payload
 */
export const updateShopDayOff = async (startDate, endDate) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/shop/update-shop-day-off`,
    {
      headers,
      method: "PUT",
      body: JSON.stringify({
        startDate,
        endDate,
      }),
    },
    {
      next: {
        tag: ["shopUpdateDayOff"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 7
 * seller delete shop
 * @returns {Promise<T>} payload
 */
export const sellerDeleteShop = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/shop/delete-shop`,
    {
      headers,
      method: "PUT",
    },
    {
      next: {
        tag: ["deleteShop"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 8
 * seller activate shop that alread have
 * @returns {Promise<T>} payload
 */
export const sellerActivateShop = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/shop/activate-shop`,
    {
      headers,
      method: "PUT",
    },
    {
      next: {
        tag: ["shopActivateShop"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 9
 * customer create new shop
 * @param {Date} startDate startDate
 * @param {Date} endDate endDate
 * @returns {Promise<T>} payload
 */
export const createNewShop = async (new_shop, lat, lon) => {
  const headers = await reqHeader();
  const { shopName, shopTypeId, email, location, phoneNumber, shopProfileImg } =
    new_shop;
  const res = await fetch(
    `${process.env.BASE_URL}/shop/create-shop?lat=${lat}&longitude=${lon}`,
    {
      headers,
      method: "POST",
      body: JSON.stringify({
        shopName,
        shopTypeId,
        email,
        location,
        phoneNumber,
        shopProfileImg,
      }),
    },
    {
      next: {
        tag: ["create-shop"],
      },
    }
  );
  const { payload } = await res.json();
  console.log(payload);
  return payload;
};

/**
 * 10
 * seller post day off
 * @param {number} shop_id shop id we want to find
 * @returns {Promise<T>} payload
 */
export const getShopById = async (shop_id) => {
  try {
    const headers = await reqHeader();
    const res = await fetch(
      `${process.env.BASE_URL}/shop/${shop_id}`,
      {
        headers,
      },
      {
        next: {
          tag: ["getShopById"],
        },
      }
    );
    const { payload } = await res.json();
    return payload;
  } catch (error) {
    throw new Error("Under Maintaint");
  }
};

/**
 * 11
 * get total seller
 * @returns {Promise<T>} payload
 */
export const getTotalSeller = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/shop/total/dashboard`,
    {
      headers,
    },
    {
      next: {
        tag: ["getTotalSeller"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 12
 * seller get all order
 * @returns {Promise<T>} payload
 */
export const getTotalOrder = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/shop/order`,
    {
      headers,
    },
    {
      next: {
        tag: ["getTotalOrder"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 13
 * customer get all shop by name
 * @param {string} shop_name shop name to find
 * @returns {Promise<T>} payload
 */
export const getShopByName = async (shop_name) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/shop/name/${shop_name}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getShopByName"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 14
 * seller get feedback
 * @returns {Promise<T>} payload
 */
export const sellerGetFeedback = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/shop/feedback/dashboard`,
    {
      headers,
    },
    {
      next: {
        tag: ["sellerGetFeedback"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 15
 * seller get shop by current user
 * @returns {Promise<T>} payload
 */
export const sellerGetShopCurrentUser = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/shop/currentShop`,
    {
      headers,
    },
    {
      next: {
        tag: ["sellerGetShopCurrentUser"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

// export const getAllShopByCurrentUser = async () => {
//   const headers = await reqHeader();
//   const res = await fetch(
//     `${process.env.BASE_URL}/`
//   )
// }
