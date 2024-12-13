import Image from "next/image";
const DashboardOverview = ({data}) => {
  return (
    <div className="w-full ">
      <div className="w-full grid grid-cols-4 gap-md_gap">
        {/* Customer */}
        <div className=" bg-[#F7F7F7] p-10 rounded-xl flex justify-center items-center ">
          <div className=" flex w-full gap-6 items-center">
            <div className="bg-[#D9F3EA] rounded-full">
              <Image
                className="rounded-full p-5 object-cover size-[6rem]"
                src={"/images/service_provider/customer_icon.png"}
                alt="profile"
                width={40}
                height={40}
              />
            </div>
            <div className=" items-center justify-center">
              <div className="text-description font-bold">{data?.customer}</div>
              <div className="text-description">Customer</div>
            </div>
          </div>
        </div>

        {/* Appointment */}
        <div className="bg-[#F7F7F7] p-10 rounded-xl flex justify-center items-center ">
          <div className=" flex w-full gap-6 items-center">
            <div className="bg-[#D9F3EA] rounded-full ">
              <Image
                className="rounded-full p-5 object-cover size-[6rem]"
                src={"/images/service_provider/appointment.png"}
                alt="profile"
                width={40}
                height={40}
              />
            </div>
            <div className="  items-center justify-center">
              <div className="text-description font-bold">{data?.appointment}</div>
              <div className="text-description">Appointment</div>
            </div>
          </div>
        </div>

        {/* Service */}
        <div className=" bg-[#F7F7F7] p-10 rounded-xl flex justify-center items-center">
          <div className=" flex w-full gap-6 items-center">
            <div className="bg-[#D9F3EA] rounded-full">
              <Image
                className="rounded-full p-5 object-cover size-[6rem] "
                src={"/images/service_provider/service.png"}
                alt="profile"
                width={40}
                height={40}
              />
            </div>
            <div className="  items-center justify-center">
              <div className="text-description font-bold">{data?.service}</div>
              <div className="text-description">Service</div>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className=" bg-[#F7F7F7] p-10 rounded-xl flex justify-center items-center">
          <div className=" flex w-full gap-6 items-center">
            <div className="bg-[#D9F3EA] rounded-full  ">
              <Image
                className="rounded-full p-5 object-cover size-[6rem] "
                src={"/images/service_provider/feedback.png"}
                alt="profile"
                width={40}
                height={40}
              />
            </div>
            <div className=" items-center justify-center">
              <div className="text-description font-bold">{data?.feedback}</div>
              <div className="text-description">Feedback</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
