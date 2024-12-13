import Image from "next/image";
import React from "react";
import PromotionLabel from "../Labels/PromotionLabel";
import TypeLabel from "../Labels/TypeLabel";
import BookmarkButton from "../Buttons/BookmarkButton";
import Link from "next/link";
import { Star } from "lucide-react";
import { getPhoto } from "@/app/utils/util_function";

const PromotionCard = ({
  type = "shop" | "service",
  idx,
  discount,
  inShop = false,
}) => {
  return (
    <main className="my-card flex flex-col gap-6   duration-300 group">
      <section className="product-img relative ">
        <section className="w-full relative inline-block rounded-[1.2rem] overflow-hidden">
          <Link
            scroll={false}
            href={!inShop ? `/view/${type}/${discount?.shopId?.shopId}` : "#"}
          >
            <Image
              width={1000}
              height={1000}
              alt="product img"
              priority
              src={getPhoto(discount?.promotionImage)}
              className="h-[30rem] duration-[3s]"
            />
          </Link>
          {/* <section className="absolute top-[1.5rem] hover:scale-105 duration-300  right-[1.5rem]">
            <BookmarkButton />
          </section> */}
        </section>
        <section className="absolute top-[1.5rem] flex flex-col items-start gap-2 right-[1.5rem] shadow-sm">
          <PromotionLabel discount={discount?.percentage + "% Discounts"} />
          {/* <TypeLabel idx={idx} popularFor={type} /> */}
        </section>
      </section>
      <section className="product-des">
        <section className=" flex flex-col justify-between">
          <section className="flex justify-between">
            {!inShop && (
              <p className="text-[1.5rem] font-medium capitalize">
                {discount?.shopId?.shopName}
              </p>
            )}
            {inShop && (
              <p className="text-[1.5rem] font-medium capitalize">
                {discount?.promotiontitle}
              </p>
            )}
            {!inShop && (
              <section className="flex justify-between">
                <p className="flex gap-2 items-center text-[1.3rem]">
                  <Star className="size-[1.6rem] fill-black stroke-none" />

                  {discount.rating}
                </p>
              </section>
            )}
          </section>
        </section>
      </section>
    </main>
  );
};

export default PromotionCard;
