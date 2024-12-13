import ProfileHeader from "./ProfileHeader";
import WelcomeBox from "./WelcomeBox";
import Tabs from "./Tabs";

const AppointmentContent = ({
  allAppointment,
  currentShop,
  allAppointmentAccepted,
}) => {
  console.log("in page app: ", currentShop);

  return (
    <section className=" w-full h-full bg-white text-black">
      <section className="grid grid-rows-[auto_1fr] gap-5">
        <ProfileHeader title={"Appointment"} />
        <section className="grid grid-rows-[auto_1fr] gap-5 h-full">
          <WelcomeBox shopName={currentShop} />
          <Tabs
            allAppointment={allAppointment}
            allAppointmentAccepted={allAppointmentAccepted}
          />
        </section>
      </section>
    </section>
  );
};

export default AppointmentContent;
