  import { reqHeader } from "../config/header.config";

/**
 * 1
 * get  product by ID (seller)
 * @param {number} product_id product id we want to find
 * @returns {object} payload
 */
export const getProductById = async (product_id) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/seller/products/${product_id}`,
    {
      headers,
    },
    {
      next: {
        tag: ["productById"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 2
 * update product by id (seller)
 * @param {object} data data new object of product
 * @param {number} product_id product id we want to find
 * @returns {object} payload
 */
export const updateProduct = async (data, product_id) => {
  const headers = await reqHeader();

  const res = await fetch(
    `${process.env.BASE_URL}/seller/products/${product_id}`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        productName: data.productName,
        unitPrice: data.unitPrice,
        productDescription: data.productDescription,
        productQty: data.productQty,
        productImg: data.productImg,
        expireDate: data.expireDate,
        categoryId: data.categoryId,
      }),
    },
    {
      next: {
        tag: ["productUpdate"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 3
 * delete product by id (seller)
 * @param {number} product_id For the product id
 * @returns {Promise<T>} payload
 */
export const deleteProductById = async (product_id) => {
  console.log("productIdService",product_id)
  const headers = await reqHeader();

  const res = await fetch(
    `${process.env.BASE_URL}/seller/products/${product_id}`,
    {
      method: "DELETE",
      headers,
    },
    {
      next: {
        tag: ["deleteProduct"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 4
 * get all products (customer)
 * @param {number} page For the page size
 * @param {number} size how many we want to show
 * @returns {Promise<T>} payload
 */
export const getAllProducts = async (page = 1, size = 8) => {
  const headers = await reqHeader();

  const res = await fetch(
    `http://localhost:8080/api/v1/seller/products?page=1&size=8`,
    {
      headers,
    },
    {
      next: {
        tag: ["product"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 5
 * post products (customer)
 * @param {object} product new product object
 * @returns {Promise<T>} payload
 */
export const postNewProduct = async (product) => {
  const headers = await reqHeader();
  const {
    productName,
    unitPrice,
    productDescription,
    productQty,
    productImg,
    expireDate,
    categoryId,
  } = product;

  const res = await fetch(
    `${process.env.BASE_URL}/seller/products`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        productName,
        unitPrice,
        productDescription,
        productQty,
        productImg,
        expireDate,
        categoryId,
      }),
    },
    {
      next: {
        tag: ["productPost"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 6
 * get products by shop id (customer)
 * @param {number} shop_id id for the shop
 * @returns {Promise<T>} payload
 */
export const getAllProductsByShopId = async (shop_id) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/seller/products/shop/${shop_id}`,
    {
      headers,
    },
    {
      next: {
        tag: ["productGetByShop"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 7
 * get products by cate id (customer)
 * @param {number} categoryId new product object
 * @returns {Promise<T>} payload
 */
export const getAllProductsByCategoryId = async (categoryId) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/seller/products/product-by-categoryId/${categoryId}`,
    {
      headers,
    },
    {
      next: {
        tag: ["productGetByCateId"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 8
 * get all product by name in shop (customer)
 * @param {string} productName name of the product
 * @returns {Promise<T>} payload
 */
export const getAllProductsByName = async (productName) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/seller/products/nameInShop/${productName}`,
    {
      headers,
    },
    {
      next: {
        tag: ["productGetByName"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 9 get all product by name (customer)
 * get products by name (customer)
 * @param {string} productName product name
 * @returns {Promise<T>} payload
 */
export const getAllProductsByNameCustomer = async (productName) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/seller/products/name/${productName}`,
    {
      headers,
    },
    {
      next: {
        tag: ["productGetByNameCustomer"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 10
 * get all product by import id (customer)
 * @param {number} import_id import id
 * @returns {Promise<T>} payload
 */
export const getAllProductsByImport = async (import_id) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/seller/products/import/${import_id}`,
    {
      headers,
    },
    {
      next: {
        tag: ["productGetByImportId"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 10
 * get all product by cate name (customer)
 * @param {number} cateName cate name
 * @returns {Promise<T>} payload
 */
export const getAllProductsByCateName = async (cateName) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/seller/products/getByCategoryName/${cateName}`,
    {
      headers,
    },
    {
      next: {
        tag: ["productGetByCateName"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 12
 * get all product by cate id (customer)
 * @param {string} cateName cate name
 * @returns {Promise<T>} payload
 */
export const getAllProductsByCateId = async (categoryId) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/seller/products/getByCategoryId/${categoryId}`,
    {
      headers,
    },
    {
      next: {
        tag: ["productGetByCateId"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 13
 * get all product by current shop (seller)
 * @returns {Promise<T>} payload
 */
export const getAllProductsByCurrentShop = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/seller/products/currentShop`,
    {
      headers,
    },
    {
      next: {
        tag: ["productGetByCateId"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};
