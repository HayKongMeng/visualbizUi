// import SidebarComponent from "@/app/components/sidebar";
import Image from "next/image";
import Tabs from "@/app/(service_provider)/components/Tabs";
import SidebarComponent from "../../components/sidebar1";

const AppointmentPage = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center overflow-y-auto">
      <div className="w-full h-[93%] flex justify-evenly">
        {/* sidebar */}
        {/* <SidebarComponent /> */}

        {/* main page  */}
        <div className="h-full w-[75%] flex-col-reverse justify-between">
          {/* navbar */}
          <div className="w-full h-[7%] flex justify-evenly">
            <div className="w-full text-title font-bold text-">Appointment</div>
            <div className=" w-full flex justify-end gap-3">
              <div className="flex items-center">
                <Image
                  className="w-[1.4rem]  h-[1.5rem] fill-black"
                  src="/images/service_provider/icon/notifications_icon.svg"
                  width={50}
                  height={50}
                  alt="Logo"
                />
              </div>
              <div className="flex items-center">
                <Image
                  className="rounded-full"
                  src={"/images/profile kakapo.png"}
                  alt="profile"
                  width={40}
                  height={40}
                />
              </div>
              <div className=" flex items-center">
                <h1 className="text-small_title font-bold">kakapo</h1>
              </div>
            </div>
          </div>

          {/* welcone box  */}
          <div className="bg-primary w-[100%] h-[25%] rounded-3xl px-[10%] py-[1%]">
            <div className="w-full h-full flex">
              <div className="h-full w-[70%]">
                <div className=" h-[30%] text-white font-normal py-[5%] items-center">
                  <p className="text-gray-200">September, 05 2003 </p>
                </div>
                <div className="h-[70%] items-center  py-[4%]">
                  <h1 className="text-title teatx font-bold text-white">
                    Welcome back, <span className="text-[#EAC100]">Rose </span>!
                  </h1>
                  <p className="text-gray-200">
                    Detailed information about your Service{" "}
                  </p>
                </div>
              </div>

              <div className="h-full w-[30%]">
                <Image
                  className="h-full object-contain fill-black"
                  src="/images/service_provider/welcome_section_image.png"
                  width={50}
                  height={50}
                  alt="Logo"
                />
              </div>
            </div>
          </div>

          {/* main box  */}
          <div className="bg-[#F7F7F7] w-[100%] h-[65%] rounded-3xl mt-[2%] px-[3%]">
            {/* table ============= */}
            <Tabs />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppointmentPage;
