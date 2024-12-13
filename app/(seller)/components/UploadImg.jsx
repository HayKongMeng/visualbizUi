"use server"
import { uploadImages } from '@/app/services/file.service';
import React from 'react'

async function UploadImg(img) {
  const file = await uploadImages(img)
  return file;
}

export default UploadImg