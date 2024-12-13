import React from "react";
import SellerProfileHeader from "../../components/SellerProfileHeader";
import PromotionSellerTab from "../../components/Promotion Components/PromotionSellerTabs";
import MainForm from "@/app/MainForm";
import { getPromotionByShopId } from "@/app/services/promotion.service";
import { sellerGetShopCurrentUser } from "@/app/services/shop.service";


 export async function PromotionPage() {
  const current = await sellerGetShopCurrentUser();
  console.log("current",current)
  const allPromotion= await getPromotionByShopId(current?.shopId);
  console.log("allpromotion",allPromotion)
  console.log(allPromotion)
  return (
    <div className="flex h-full pl-5 flex-col gap-5 overscroll-y-scroll">
      <div className="">
        <SellerProfileHeader title={"Promotion Management"} />
      </div>
      <div className=" flex flex-col  gap-5 h-full   overscroll-y-scroll">
        <div className="flex justify-end w-full mt-10 ">
          {/* <div className="font-semibold">Promotion</div> */}
          <div>
           <MainForm/>
          </div>
        </div>
        <PromotionSellerTab allPromotion={allPromotion}/>
      </div>
    </div>
  );
}

export default PromotionPage;
