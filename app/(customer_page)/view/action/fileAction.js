"use server";

import { uploadImages } from "@/app/services/file.service";

export const uploadImage = async (img) => {
  return await uploadImages(img);
};
