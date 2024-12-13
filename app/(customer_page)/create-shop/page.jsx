"use client";
import ImageUploadInput from "@/app/(seller)/components/ImageUploadInput";
import { createShopAction } from "@/app/action/createshopAction";
import { uploadImageAction } from "@/app/action/fileAction";
import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import { useLocationStore } from "@/app/store/locationStore";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function CreateShop() {
  const {
    location: { lat, lon },
    current_user_location,
  } = useLocationStore();
  console.log("lat lon : ", lat, lon);

  const [img, setImg] = useState(null);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data ", { ...data });
    const fileData = new FormData();
    fileData.append("file", img);
    console.log("form data : ", fileData);
    const file = await uploadImageAction(fileData);
    console.log("file : ", file.payload.fileName);
    await createShopAction(
      { ...data, shopProfileImg: file.payload.fileName },
      lat,
      lon
    );
  };

  return (
    <Container className="my-big_margin">
      <section className="grid grid-cols-2 ">
        <section className="flex justify-start items-center w-full">
          <section className="w-[ 45rem] h-[45rem]">
            <Image
              src={"/svgs/frame 1171276807.svg"}
              width={10}
              height={50}
              alt="createshop"
            />
          </section>
        </section>
        <section className=" flex flex-col items-center justify-center mx-5">
          <p className="font-semibold text-3xl mb-10 ">Creat Shop</p>
          <section className="w-full  ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <section className="flex flex-col gap-2 ">
                <label
                  htmlFor="name"
                  className=" mb-2 text-[1.4rem] font-semibold "
                >
                  Shop Name
                </label>
                <section className="w-full p-5 rounded-lg border border-gray-300 bg-white text-black flex gap-3">
                  <section className="w-[25px]">
                    <Image
                      src={"/svgs/storefront-outline.svg"}
                      width={50}
                      height={50}
                      alt="shopName"
                    />
                  </section>
                  <input
                    type="text"
                    {...register("shopName")}
                    // name="shop"
                    id="shopName"
                    className="w-full text-[1.4rem] rounded-lg  focus:outline-none   "
                    placeholder="Angel Felix"
                    required
                  />
                </section>
              </section>
              <section className="flex flex-col gap-2 ">
                <label
                  htmlFor="seller"
                  className="mb-2 text-[1.4rem]  font-medium"
                >
                  Type Shop
                </label>
                <select
                  {...register("shopTypeId", { valueAsNumber: true })}
                  id="shop"
                  name="shop"
                  className="border border-gray-300 text-[1.4rem] rounded-lg w-full p-5 "
                >
                  <option className="text-2xl" value={1}>
                    Seller
                  </option>
                  <option value={2}>Service Provider</option>
                </select>
              </section>
              <section className="flex flex-col gap-2 ">
                <label
                  htmlFor="email"
                  className=" mb-2 text-[1.4rem] font-medium "
                >
                  Email
                </label>
                <section className="w-full p-5 rounded-lg border border-gray-300 bg-white text-black flex gap-3">
                  <section className="w-[25px]">
                    <Image
                      src={"/svgs/mail-outline.svg"}
                      width={50}
                      height={50}
                      alt="email"
                    />
                  </section>
                  <input
                    type="email"
                    {...register("email")}
                    name="email"
                    id="email"
                    className="w-full text-[1.4rem]  rounded-lg border-none focus:outline-none   "
                    placeholder="angel_felix6226@gmail.com"
                    required
                  />
                </section>
              </section>
              <section className="flex flex-col gap-2 ">
                <label
                  htmlFor="location"
                  className=" mb-2 text-[1.4rem] font-medium "
                >
                  Location
                </label>
                <section className="w-full p-5 rounded-lg border border-gray-300 bg-white text-black flex gap-3">
                  <section className="w-[25px]">
                    <Image
                      src={"/svgs/location-outline.svg"}
                      width={50}
                      height={50}
                      alt="location"
                    />
                  </section>
                  <input
                    type="text"
                    {...register("location")}
                    value={current_user_location}
                    defaultValue={current_user_location}
                    // name="location "
                    id="location"
                    className="w-full text-[1.4rem]  rounded-lg border-none focus:outline-none   "
                    placeholder="Phnom Penh"
                    required
                  />
                </section>
              </section>
              <section className="flex flex-col gap-2 ">
                <label
                  htmlFor="text"
                  className=" mb-2 text-[1.4rem] font-medium "
                >
                  Phone Number
                </label>
                <section className="w-full p-5 rounded-lg border border-gray-300  bg-white text-black flex gap-3">
                  <section className="w-[25px]">
                    <Image
                      src={"/svgs/call-outline.svg"}
                      width={50}
                      height={50}
                      alt="phoneNumber"
                    />
                  </section>
                  <input
                    type="number"
                    {...register("phoneNumber")}
                    name="phoneNumber"
                    id="phoneNumber"
                    className="w-full text-[1.4rem]  rounded-lg border-none focus:outline-none   "
                    placeholder="0968189261"
                    required
                  />
                </section>
                <section className="w-full rounded-lg    bg-white text-black flex flex-col gap-3">
                  <label
                    htmlFor="text"
                    className=" mb-2 pt-4 text-[1.4rem] font-medium "
                  >
                    Upload Image
                  </label>
                  <ImageUploadInput handleUploadImage={setImg} />
                  {/* <label htmlFor="upload_cover" className="cursor-pointer">
                    <div>
                      <input
                        type="file"
                        name="profile"
                        id="upload_cover"
                        hidden
                        multiple
                        onChange={(e) =>
                          setImg([
                            URL.createObjectURL(e.target.files[0]),
                            e.target.files[0],
                          ])
                        }
                      />
                      {img ? (
                        <Image
                          className="object-cover h-[28rem] "
                          src={img[0]}
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
                  </label> */}
                </section>
              </section>
              <section className="inline-block rounded-[1rem] overflow-hidden w-[16rem] mt-10 self-end text-xl">
                <Button>Create</Button>
              </section>
            </form>
          </section>
        </section>
      </section>
    </Container>
  );
}

export default CreateShop;
