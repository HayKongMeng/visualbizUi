import React from "react";
import ScheduleContent from "../../components/ScheduleContent";
import CalendarContent from "./components/CalendarContent";
// import Tabs from '@/app/(service_provider)/components/Tabs';


function Schedule() {
  return (
    <section className="h-full  overflow-y-hidden">
     {/* <ScheduleContent/> */}
     <CalendarContent/>
    </section>
  );
}
export default Schedule;
