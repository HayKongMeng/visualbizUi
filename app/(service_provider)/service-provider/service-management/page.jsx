import React from "react";
import ServiceManagementContent from "../../components/ServiceManagementContent";
import {
  getAllAppointmentCurrentShop,
  getAllServicesInShop,
} from "@/app/services/service.service";
async function Service() {
  const getService = await getAllServicesInShop();
  const allAppointment = await getAllAppointmentCurrentShop();
  console.log(getService);
  return <ServiceManagementContent data={getService} allApp={allAppointment} />;
}
export default Service;
