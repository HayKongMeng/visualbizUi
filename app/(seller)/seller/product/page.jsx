// import React from "react";
// import TableComp from "../../components/Table";
// import SellerProfileHeader from "../../components/SellerProfileHeader";
// import { getPromotionByShopId } from "@/app/services/promotion.service";
// import { getAllProductsByShopId } from "@/app/services/product.service";
// import { sellerGetShopCurrentUser } from "@/app/services/shop.service";

// export async function SellerProductPage() {
//   const current = await sellerGetShopCurrentUser();
//   console.log("current", current);
//   const data = await getAllProductsByShopId(current.shopId);
//   console.log("data", data);
//   return (
//     <section className="h-full w-full pl-5 bg-white text-black    overflow-y-hidden rounded-r-xl overflow-x-hidden">
//       <section className="flex flex-col gap-5 h-full">
//         <SellerProfileHeader title={"Product Management"} />

//         <section className="flex flex-col gap-5 h-full w-full ">
//             <TableComp data={data}/>
//         </section>
//       </section>
//     </section>
//   );
// }

// export default SellerProductPage;
import React from "react";
import TableComp from "../../components/Table";
import SellerProfileHeader from "../../components/SellerProfileHeader";
import { getPromotionByShopId } from "@/app/services/promotion.service";
import { getAllProductsByShopId } from "@/app/services/product.service";
import { sellerGetShopCurrentUser } from "@/app/services/shop.service";

export async function SellerProductPage() {
  let data = [];
  let current;
  
  try {
    current = await sellerGetShopCurrentUser();
    console.log("current", current);
    
    if (current && current.shopId) {
      data = await getAllProductsByShopId(current.shopId);
      console.log("data", data);
    } else {
      console.error("Shop information not found for current user");
    }
  } catch (error) {
    console.error("Error fetching shop or product data:", error);
  }
  
  return (
    <section className="h-full w-full pl-5 bg-white text-black overflow-y-hidden rounded-r-xl overflow-x-hidden">
      <section className="flex flex-col gap-5 h-full">
        <SellerProfileHeader title={"Product Management"} />
        <section className="flex flex-col gap-5 h-full w-full">
          {!current || !current.shopId ? (
            <div className="p-4 text-center">
              <p className="text-red-500 font-medium mb-2">No shop found for this seller</p>
              <p>Please create a shop or contact support if you believe this is an error.</p>
            </div>
          ) : (
            <TableComp data={data} />
          )}
        </section>
      </section>
    </section>
  );
}

export default SellerProductPage;