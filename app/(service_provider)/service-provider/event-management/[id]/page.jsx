import { eventDatas } from "@/app/(customer_page)/view/(events)/eventData";
import EventDetail from "@/app/(service_provider)/Event Components/EventDetail";
import ProfileHeader from "@/app/(service_provider)/components/ProfileHeader";
import React from "react";

function SellerEventDetailPage({ params }) {
  const id = params?.id;
  const event = eventDatas[id - 1];
  return (
    <div className="pl-5">
      <ProfileHeader title={"Event"} />
      <EventDetail event={event} />
    </div>
  );
}

export default SellerEventDetailPage;
