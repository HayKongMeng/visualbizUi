import Image from "next/image";
import Link from "next/link";
import React from "react";
import BookmarkButton from "../Buttons/BookmarkButton";
import PromotionLabel from "../Labels/PromotionLabel";
import TypeLabel from "../Labels/TypeLabel";
import { getPhoto } from "@/app/utils/util_function";
import { Star } from "lucide-react";
import { useEffect } from "react";

const PoplularCard = ({ promotionFor, dataObjDetail, idx }) => {
  return (
    <main className="flex my-card flex-col gap-6 group">
      <section className="inline-block relative w-full rounded-[1.2rem] overflow-hidden ">
        <Link href={`/view/${promotionFor}/${dataObjDetail?.shop.shopId}`}>
          <Image
            width={1000}
            height={1000}
            alt="product img"
            priority
            src={getPhoto(dataObjDetail?.shop?.shopProfileImg)}
            className="h-[30rem] duration-[3s]"
          />
        </Link>
        {/* <section className="absolute top-[1.5rem] hover:scale-105 duration-300  right-[1.5rem]">
          <BookmarkButton
            type={promotionFor}
            idx={dataObjDetail?.id}
            id={dataObjDetail?.id}
          />
        </section> */}
        <section className="absolute top-[1.5rem] flex flex-col gap-2 right-[1.5rem] shadow-sm">
          <TypeLabel idx={idx} popularFor={promotionFor} />
        </section>
      </section>
      <Link
        href={`/view/${promotionFor}/${dataObjDetail.id}`}
        className="flex justify-between gap-3"
      >
        <p className="text-normal font-medium capitalize">
          {dataObjDetail?.shop.shopName}
        </p>
        <p className="flex gap-2 items-center text-mid">
          <Star className="size-[1.6rem] fill-black stroke-none" />

          {dataObjDetail?.rating_point}
        </p>
      </Link>
    </main>
  );
};

export default PoplularCard;
