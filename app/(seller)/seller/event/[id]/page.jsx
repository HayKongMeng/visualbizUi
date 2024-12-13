import { eventDatas } from "@/app/(customer_page)/view/(events)/eventData";
import SellerEventDetail from "@/app/(seller)/components/Event Components/EventDetail";
import SellerProfileHeader from "@/app/(seller)/components/SellerProfileHeader";
import React from "react";

function SellerEventDetailPage({ params }) {
  const id = params.id;
  const event = eventDatas[id - 1];
  return (
    <div className="pl-5">
      <SellerProfileHeader title={"Event"} />
      <SellerEventDetail event={event} />
    </div>
  );
}

export default SellerEventDetailPage;
