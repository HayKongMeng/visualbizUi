import React from "react";
import ProfileHeader from "../../components/ProfileHeader";
import AddEventModal from "../../Event Components/AddEventModal";
import EventServiceProviderTab from "../../Event Components/EventServiceProviderTabs";
import { getAllEventServiceAction } from "@/app/action/EventAction";
async function EventPage() {
  const data = await getAllEventServiceAction();
  console.log(data);
  return (
    <div className="flex h-full flex-col gap-5 overscroll-y-scroll">
      <div className="bg-white">
        <ProfileHeader title={"Event Management"} />
      </div>
      <div className=" flex flex-col  gap-5 h-full overscroll-y-scroll">
        <div className="flex justify-end w-full mt-10 ">
          <div>
            <AddEventModal />
          </div>
        </div>
        <EventServiceProviderTab data={data}/>
      </div>
    </div>
  );
}
export default EventPage;
