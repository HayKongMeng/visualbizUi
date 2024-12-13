import ProfileHeader from "./ProfileHeader";
import WelcomeBox from "./WelcomeBox";
import Tabs from "./Tabs";
import HistoryTopHeader from "./History Components/HistoryTopHeader";

const AppointmentContent = () => {
  return (
    <section className=" w-full h-full bg-white text-black">
      <section className="flex flex-col gap-5">
        <ProfileHeader title={"History"} />
        <section className="flex flex-col gap-5 h-full">
          <div className="z-0">
            <HistoryTopHeader />
          </div>
        </section>
      </section>
    </section>
  );
};

export default AppointmentContent;
