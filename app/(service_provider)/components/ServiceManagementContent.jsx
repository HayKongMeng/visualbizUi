import ProfileHeader from "./ProfileHeader";
import AddServiceModal from "../Service Components/AddServiceModal";
import ServiceTable from "./ServiceTable";

const ServiceManagementContent = ({ data, allApp, allAppServiceId }) => {
  return (
    <section className="grid grid-rows-[auto_auto_1fr] h-full gap-md_gap ">
      <ProfileHeader title={"Service Management"} />
      <div className="justify-end items-center flex  ">
        <AddServiceModal />
      </div>
      <div className="h-full no-scrollbar overflow-y-scroll ">
        <ServiceTable
          services={data}
          allApp={allApp}
          allAppServiceId={allAppServiceId}
          // onSelectService={setSelectedService}
        />
      </div>
    </section>
  );
};

export default ServiceManagementContent;
