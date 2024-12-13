import React from "react";
import DashboardContent from "../../components/DashboardContent";
import { getAllFeedback, getOverview } from "@/app/services/dashboard.service";
import { log } from "console";
import { getAllAppointmentInShopByServiceId } from "@/app/services/service.service";
async function Dashboard() {
  const res = await getOverview();
  const allFeedback = await getAllFeedback();
  console.table(res);
  console.table(allFeedback);
  return <DashboardContent data={res} allfeedback={allFeedback} />;
}

export default Dashboard;
