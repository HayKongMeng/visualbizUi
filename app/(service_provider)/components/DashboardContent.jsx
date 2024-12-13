import ProfileHeader from "./ProfileHeader";
import DashboardOverview from "./DashboardOverview";
import DashboardPopularService from "./DashboardPopularService";
import DashboardFeedback from "./DashboardFeedback";
import DashboardUpcomingAppointment from "./DashboardUpcomingAppointment";

const DashboardContent = ({ data, allfeedback }) => {
  return (
    <div className=" w-full grid grid-rows-[auto_auto_1fr] gap-md_gap">
      <ProfileHeader title={"Dashboard"} />
      <div className="flex flex-col h-full overflow-y-auto">
        <DashboardOverview data={data} />

        {/* Popular Service */}
        {/* <DashboardPopularService /> */}

        {/* feedback and upcomming service  */}
        <h1 className="rounded-xl text-title font-bold">Feedback</h1>
        <div className="w-full h-full grid grid-cols-[1fr_auto] overflow-y-scroll gap-md_gap">
          {/* feedback */}
          <DashboardFeedback allfeedback={allfeedback} />
          {/* Upcoming Appointment  */}
          <div className=" flex h-full justify-between">
            <DashboardUpcomingAppointment />
          </div>
        </div>
      </div>
      {/* Overview */}
    </div>
  );
};

export default DashboardContent;
