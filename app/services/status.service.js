// import { reqHeader } from "../config/header.config";

// /**
//  * 1
//  * seller deny order
//  * @param {number} orderId orderId
//  * @returns {object} payload
//  */
// export const denyOrder = async (orderId) => {
//   const headers = await reqHeader();
//   const res = await fetch(
//     `${process.env.BASE_URL_V2}/order/order/deny/${orderId}`,
//     {
//       method: "PUT",
//       headers,
//     },
//     {
//       next: {
//         tag: ["denyOrder"],
//       },
//     }
//   );
//   const { payload } = await res.json();
//   return payload;
// };
