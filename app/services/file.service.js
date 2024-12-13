"use server";
import { reqHeader } from "../config/header.config";

/**
 * 1
 * get file name
 * @param {string} fileName file name
 * @returns {object} payload
 */
export const getFileName = async (fileName) => {
  const headers = await reqHeader();
  headers['Authorization'] = 'Bearer YOUR_ACCESS_TOKEN'; // replace with actual token if necessary
  headers['Content-Type'] = 'multipart/form-data';
  const res = await fetch(
    `${process.env.BASE_URL_V2}/v1/file?fileName=${fileName}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getFileName"],
      },
    }
  );
  const data = await res.json();
  return data;
};

/**
 * 1
 * uploadfile
 * @param {string} fileName file name
 * @returns {object} payload
 */
// export const uploadImages = async (fileName) => {
//   console.log("fileName", fileName);
//   const res = await fetch("http://localhost:8080/api/v1/files",
//     {
//       method: "POST",
//       body: fileName,
//     },
//     {
//       next: {
//         tag: ["uploadImages"],
//       },
//     }
//   );
 
//   const data = res.json();
//   console.log("Response text:", data);
//   return data;
// };

export const uploadImages = async (req) => {
  console.log("file in service: ", req);
  const res = await fetch("http://localhost:8080/api/v1/files", {
    method: "POST",
    body: req
  });

  // Check if the response is OK (status 200-299)
  // if (!res.ok) {
  //   throw new Error(`File upload failed with status: ${res.status}`);
  // }

  const data = await res.json(); // Assuming the server returns JSON
  console.log("data: ", data)
  console.log("name: ", data?.payload?.fileName);
  return data?.payload?.fileName;

  // Assuming the server returns an object with the fileName
  // return data?.payload?.name;
};


