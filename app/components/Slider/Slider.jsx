"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/slider";
import Link from "next/link";

export function MyImagesSlider() {
  const images = [
    "/images/mac.jpg",
    "/images/keyboard.jpg",
    "/images/gopro.jpg",
    "/images/drone.jpg",
  ];
  return (
    <ImagesSlider className="h-[57rem] my-md_margin items-end" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center my-6"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-white bg-gradient-to-b leading-[2] from-neutral-50 to-neutral-400 py-4 flex flex-col gap-6">
          <span className="text-white">Go Shopping</span>
          <span className="text-white">With VirtualBiz</span>
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-white/10  text-white mx-auto text-center rounded-full relative mt-4">
          <Link href={"#sec-btn"} className="text-white text-normal">
            Shop Now →
          </Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
