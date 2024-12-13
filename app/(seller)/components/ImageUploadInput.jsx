"use client";
import Image from "next/image";
import React, { useState } from "react";
// Select the file input and use create() to turn it into a pond
function ImageUploadInput({ handleUploadImage }) {
  const [preview, setPreview] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        // setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
    handleUploadImage(file);
  };
  return (
    <label htmlFor="upload_cover_add" className="cursor-pointer">
      <div>
        <input
          type="file"
          name="profile_add"
          id="upload_cover_add"
          hidden
          multiple
          onChange={handleImageChange}
        />
        {preview ? (
          <Image
            className="object-cover h-[28rem] "
            src={preview}
            alt="Uploaded Image"
            width={1000}
            height={1000}
          />
        ) : (
          <Image
            src="/svgs/upload_photo.svg"
            width={30}
            height={30}
            alt="Upload Icon"
          />
        )}
      </div>
    </label>
  );
}

export default ImageUploadInput;
