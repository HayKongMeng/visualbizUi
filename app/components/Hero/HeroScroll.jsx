"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Let us explore <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                VirtualBiz
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/images/virtualbiz.png`}
          alt="hero"
          height={1000}
          width={1400}
          className="mx-auto rounded-2xl w-full object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
