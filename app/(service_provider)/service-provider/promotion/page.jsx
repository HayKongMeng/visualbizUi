import React from "react";
import ProfileHeader from "../../components/ProfileHeader";
import Button from "@/app/components/Button";
import PromotionServiceProviderTabs from "../../components/Promotion Components/PromotionServiceProviderTabs";
import { sellerGetShopCurrentUser } from "@/app/services/shop.service";
import { getAllPromotions, getPromotionByShopId } from "@/app/services/promotion.service";


async function PromotionPage() {
  const data = await sellerGetShopCurrentUser();
  console.log(data)
const allPromotion = await getPromotionByShopId(data.shopId);
console.log(allPromotion);
  return (
    <div className="grid grid-rows-[auto_1fr] gap-5 overscroll-y-scroll">
      <ProfileHeader title={"Promotion Management"} />

      <div className=" flex flex-col  gap-5 h-full   overscroll-y-scroll">
        <div className="flex justify-end w-full mt-10 ">
          {/* <div className="font-semibold">Promotion</div> */}
          <div>
            <Button className="text-white text-[1.2rem] px-10 py-3">
              Add promotion
            </Button>
          </div>
        </div>
        <PromotionServiceProviderTabs allPromotion={allPromotion} />
      </div>
    </div>
  );
}

export default PromotionPage;
