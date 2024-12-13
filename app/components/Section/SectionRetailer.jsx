import { shopList } from "@/app/data/dummy_shop_data";
import React from "react";
import ShopCard from "../Cards/ShopCard";

const SectionRetailer = ({ isFilter = false, allShop }) => {
  const shops = allShop.filter((shop) => shop.shopType.shopTypeId === 1);
  return (
    <>
      {allShop?.length > 0 && (
        <section className="my-big_margin flex flex-col gap-[2.4rem]">
          {!isFilter && (
            <p className="font-semibold text-[2.4rem] ">Retailers</p>
          )}
          <section className="product-wrapper grid grid-cols-4 gap-[2.6rem]">
            {shops?.map((shop, idx) => (
              <React.Fragment key={idx}>
                <ShopCard shop={shop} key={idx} idx={idx} shop_id={idx + 1} />
              </React.Fragment>
            ))}
          </section>
        </section>
      )}
    </>
  );
};

export default SectionRetailer;
