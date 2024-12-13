// import ServiceCard from "/components\Cards\ServiceCard.jsx";
"use client";
import Link from "next/link";
import ServiceCard from "../../(service_provider)/components/Cards/ServiceCard";
const DashboardPopularService = () => {
  const services = [
    {
      id: 1,
      imageSrc: "/images/service_provider/service1.png",
      title: "Nail Coloring",
      description: "Bringing Color to Your Life, One Nail at a Time",
      details:
        "Book your spa day now and enjoy a complimentary aromatherapy session!",
    },
    {
      id: 2,
      imageSrc: "/images/service_provider/service2.png",
      title: "Nail Coloring",
      description: "Bringing Color to Your Life, One Nail at a Time",
      details:
        "Book your spa day now and enjoy a complimentary aromatherapy session!",
    },
    {
      id: 3,
      imageSrc: "/images/service_provider/service3.png",
      title: "Nail Coloring",
      description: "Bringing Color to Your Life, One Nail at a Time",
      details:
        "Book your spa day now and enjoy a complimentary aromatherapy session!",
    },
  ];

  return (
    <div className="w-full h-[24%] 3xl:h-[25rem]">
      <div className="my-10">
        <h1 className="text-normal font-semibold">Popular Service</h1>
      </div>
      <div className="w-full h-[100%] flex gap-8 overflow-hidden overflow-x-scroll no-scrollbar">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
            details={service.details}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPopularService;
