import Image from "next/image";

const AppointmentCard = ({
  userImage,
  serviceName,
  customerName,
  date,
  time,
}) => (
  <div className="mb-5 w-full h-fit">
    <div className="w-full bg-white grid grid-cols-[auto_20rem] gap-6 items-center rounded-lg shadow">
      <div className="">
        <Image
          className="rounded-lg w-[15rem] 3xl:w-[12rem] h-[12rem] object-cover px-5 py-5"
          src={userImage}
          alt={customerName}
          width={400}
          height={400}
        />
      </div>
      <div className=" py-5 flex flex-col gap-2 justify-between">
        <div className="flex flex-col">
          <h2 className="font-semibold text-[1.6rem]">{customerName}</h2>
          <h1 className="font-medium text-mid">{serviceName}</h1>
        </div>
        <div className="flex flex-col ">
          <div className="flex items-center gap-2 text-gray-600">
            <Image
              className="w-5 h-5"
              src="/images/service_provider/icon/calendar.svg"
              alt="Calendar Icon"
              width={20}
              height={20}
            />
            <span className="text-mid">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Image
              className="w-5 h-5"
              src="/images/service_provider/icon/time.svg"
              alt="Time Icon"
              width={20}
              height={20}
            />
            <span className="text-[1.4rem]">{time}</span>
          </div>
        </div>
      </div>
      {/* <p className="w-1/4 flex justify-end  text-mid">DETAIL</p> */}
    </div>
  </div>
);

export default AppointmentCard;
