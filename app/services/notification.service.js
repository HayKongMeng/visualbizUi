// import { reqHeader } from "../config/header.config";

// /**
//  * 1
//  * get  product by ID (seller)
//  * @param {number} product_id product id we want to find
//  * @returns {object} payload
//  */
// export const getProductById = async (product_id) => {
//   const headers = await reqHeader();
//   const res = await fetch(
//     `${process.env.BASE_URL}/seller/products/${product_id}`,
//     {
//       headers,
//     },
//     {
//       next: {
//         tag: ["productById"],
//       },
//     }
//   );
//   const { payload } = await res.json();
//   return payload;
// };
