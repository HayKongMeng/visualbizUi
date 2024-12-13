"use client";
import Image from "next/image";
import React, { useState } from "react";

function UploadImage({ handleUploadImage,eventImage }) {
  console.log("EventImage: ", eventImage);
  const [view, setPreview] = useState(null);
  async function handleImageChange(e) {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onloadend = () =>{
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    handleUploadImage(file);
  };
  return (
    <>
      <label htmlFor="upload_cover_update" className="cursor-pointer">
        <div>
          <input
            type="file"
            name="profile_update"
            id="upload_cover_update"
            hidden
            multiple
            onChange={handleImageChange}
          />
          {view ? (
            <Image
              className="object-cover h-[28rem]"
              src={view}
              alt="Uploaded Image"
              width={1000}
              height={1000}
            />
          ) : (
            <Image
              src={`http://localhost:8080/api/v1/files?fileName=${eventImage}`}
              width={1000}
              height={1000}
              alt="Upload Icon"
            />
          )}
        </div>
      </label>
    </>
  );
}

export default UploadImage;
