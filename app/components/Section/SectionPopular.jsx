// "use client";
import { productList } from "@/app/data/dummy_product_data";
import React from "react";
import PoplularCard from "../Cards/PoplularCard";

const SectionPopular = ({ isFilter = false, allPopular }) => {
  return (
    <>
      {allPopular?.length > 0 && (
        <section className="my-big_margin flex flex-col gap-[2.4rem]">
          {!isFilter && <p className="font-semibold text-[2.4rem] ">Popular</p>}
          <section className="product-wrapper grid grid-cols-4 gap-[2.4rem]">
            {allPopular.map((pro, idx) => (
              <React.Fragment key={idx}>
                <PoplularCard
                  promotionFor={
                    pro?.shop.shopType.shopType.toLowerCase().includes("seller")
                      ? "shop"
                      : "service"
                  }
                  dataObjDetail={pro}
                  idx={idx}
                />
              </React.Fragment>
            ))}
          </section>
        </section>
      )}
    </>
  );
};

export default SectionPopular;
