"use server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";
import { uploadImages } from "../services/file.service";

export const uploadImageAction = async (req) => {
  try {
    console.log("File data in uploadImageAction:", req);
    const file = await uploadImages(req); // Assuming uploadImages handles the actual HTTP request
    console.log("Uploaded file response:", file);

    // if (!file.payload.fileName) {
    //   throw new Error("File upload failed: Server did not return a file name.");
    // }

    return file; // Assuming file object contains necessary details like fileName
  } catch (error) {
    console.error("Error in uploadImageAction:", error);
    throw error; // Rethrow the error to handle it further up the call stack
  }
};

// export async function uploadFile(formData) {
//   const file = formData.get("file");
//   const arrayBuffer = await file.arrayBuffer();
//   const buffer = new Uint8Array(arrayBuffer);

//   await fs.writeFile(`./public/uploads/${file.name}`, buffer);

//   revalidatePath("/");
// }