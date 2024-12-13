import React from "react";
import PromotionCard from "../Cards/PromotionCard";
import { discountList } from "@/app/data/dummy_discount._data";

const SectionPromotion = ({ isFilter = false, allPromotions }) => {
  return (
    <section
      id="promotion"
      className="my-big_margin flex flex-col gap-[2.4rem]"
    >
      {!isFilter && <p className="font-semibold text-[2.4rem]">Promotion</p>}
      <section className="product-wrapper grid grid-cols-4 gap-[2.6rem]">
        {allPromotions?.map((discount, idx) => (
          <PromotionCard
            key={idx}
            idx={idx}
            type={
              discount?.shopId?.shopType?.shopTypeId == 1 ? "shop" : "service"
            }
            discount={discount}
          />
        ))}
      </section>
    </section>
  );
};

export default SectionPromotion;
