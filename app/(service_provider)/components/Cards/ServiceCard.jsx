import Image from "next/image";
import Link from "next/link";
const ServiceCard = ({ imageSrc, title, description, details }) => (
  <div className="bg-[#F7F7F7] h-[17rem]  3xl:h-[20rem] w-[45%] flex-shrink-0 flex">
    <div className="w-[40%]">
      <Image
        className="rounded-l-xl"
        src={imageSrc}
        alt={title}
        width={1000}
        height={1000}
      />
    </div>
    <div className="w-[60%] h-full py-7 px-10 justify-stretch">
      <div className="w-full h-[80%] flex flex-col gap-2">
        <h1 className="text-normal font-semibold">{title}</h1>
        <p className="text-small_title text-gray-400">{description}</p>
        <p className="text-small_title">{details}</p>
      </div>
      <div className="w-full flex justify-end h-[20%]">
        <Link href={"/service-provider/service-management"}>
          <button className="small-btn bg-primary text-white rounded-small">
            Detail
          </button>
        </Link>
      </div>
    </div>
  </div>
);
export default ServiceCard;
