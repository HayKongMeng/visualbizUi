import Image from "next/image";
import SidebarButton from "@/app/components/Buttons/SidebarButton";
export const sidebarList = [
  {
    name: "Dashboard",
    icon: "/images/service_provider/icon/dashboard_icon.svg",
    link: "/service-provider/dashboard",
  },
  {
    name: "Shop Management",
    icon: "/images/service_provider/icon/shop_icon.svg",
    link: "/service-provider/shop-management",
  },
  {
    name: "Service Management",
    icon: "/images/service_provider/icon/service_icon.svg",
    link: "/service-provider/service-management",
  },
  {
    name: "Appointment",
    icon: "/images/service_provider/icon/appointment_icon.svg",
    link: "/service-provider/appointment",
  },
  {
    name: "Schedule",
    icon: "/images/service_provider/icon/schedule_icon.svg",
    link: "/service-provider/schedule",
  },
  {
    name: "Event Management",
    icon: "/images/service_provider/icon/event_icon.svg",
    link: "/service-provider/event-management",
  },
  {
    name: "History",
    icon: "/images/service_provider/icon/history_icon.svg",
    link: "/service-provider/history",
  },
  {
    name: "Logout",
    icon: "/images/service_provider/icon/logout_icon.svg",
    link: "/service-provider/logout",
  },
];
const SidebarComponent = () => {
  return (
    <div className="sidebar-wrapper w-[17%]">
      <div className="sidebar-content h-full px-7 bg-primary dark:bg-gray-800 rounded-3xl pt-10">
        <div className="mb-14">
          <a
            href="#"
            className="flex items-center p-10 rounded-xl dark:text-white bg-gray-100 group"
          >
            <Image src="/images/service_provider/icon/Logo.svg" width={50} height={50} alt="Logo" />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"></span>
          </a>
        </div>
        <div className="mb-4 pb-4 pt-4 mt-4 grid-rows-5 text-normal font-normal gap-y-sm_gap grid-flow-col">
          {sidebarList.slice(0, -1).map((item, idx) => (
            <SidebarButton
              sideabarName={item.name}
              icon={item.icon}
              link={item.link}
              key={idx}
            />
          ))}
        </div>
        <div className="mt-[27rem] flex justify-center">
          <SidebarButton
            sideabarName={sidebarList[sidebarList.length - 1].name}
            icon={sidebarList[sidebarList.length - 1].icon}
            link={sidebarList[sidebarList.length - 1].link}
            key={sidebarList.length - 1}
          />
        </div>
      </div>
    </div>
  );
};
export default SidebarComponent;