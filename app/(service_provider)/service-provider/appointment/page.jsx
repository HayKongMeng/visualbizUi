import React from "react";
import AppointmentContent from "../../components/AppointmentContent";
import AppointmentPage from "../appointment1/page";
import {
  acceptAppointment,
  getAllAppointmentAccepted,
  getAllAppointmentCurrentShop,
} from "@/app/services/service.service";
import { sellerGetShopCurrentUser } from "@/app/services/shop.service";
// import Tabs from '@/app/(service_provider)/components/Tabs';

async function Appointment() {
  const appointment = await getAllAppointmentCurrentShop();
  console.log("in appointment page: ", appointment);

  const currentShop = await sellerGetShopCurrentUser();
  const shopName = currentShop?.shopName;

  const allAppointmentAccepted = await getAllAppointmentAccepted();
  console.log("accepted: ", allAppointmentAccepted);
  return (
    <AppointmentContent
      allAppointment={appointment}
      currentShop={shopName}
      allAppointmentAccepted={allAppointmentAccepted}
    />
  );
}
export default Appointment;
