"use client";
import React from "react";
import SectionPopular from "../Section/SectionPopular";
import SectionPromotion from "../Section/SectionPromotion";
import SectionRetailer from "../Section/SectionRetailer";
import SectionServiceProvider from "../Section/SectionServiceProvider";
import { useStore } from "@/app/store/store";

const BodyWrapper = ({ allShop, allPopular, allPromotions }) => {
  const { categoryFilter, category } = useStore();

  const isFilter = categoryFilter == "All" && true;

  return (
    <>
      {isFilter && (
        <>
          <SectionPopular allPopular={allPopular} />
          <SectionPromotion allPromotions={allPromotions} />
          <SectionRetailer allShop={allShop} />
          <SectionServiceProvider allShop={allShop} />
        </>
      )}
      {categoryFilter == "Popular" && category == "All" && (
        <SectionPopular isFilter={true} allPopular={allPopular} />
      )}
      {categoryFilter == "Promotions" && category == "All" && (
        <SectionPromotion isFilter={true} allPromotions={allPromotions} />
      )}
      {categoryFilter == "Retailers" && category == "All" && (
        <SectionRetailer isFilter={true} allShop={allShop} />
      )}
      {categoryFilter == "Service Providers" && category == "All" && (
        <SectionServiceProvider isFilter={true} allShop={allShop} />
      )}
    </>
  );
};

export default BodyWrapper;
