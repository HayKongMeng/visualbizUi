import React from "react";
import ShopManagementContent from "../../components/ShopManagementContent";
import { getShopInfo } from "@/app/services/shop-server-manengement.service";
import { updateShopDayOff, updateShopInfo } from "@/app/services/shop.service";
// import Tabs from '@/app/(service_provider)/components/Tabs';

async function Appointment() {
  const shopInfo = await getShopInfo();
  // const dayOff = await updateShopDayOff();
  return <ShopManagementContent data={shopInfo} />;
}
export default Appointment;
