import Image from "next/image";

export const footer_list = [
  {
    header: "Customer",
    list: ["history", "bookmark", "order product", "location", "profile"],
  },
  {
    header: "Service Provider",
    list: [
      "history",
      "all services",
      "all appointments",
      "schedule management",
    ],
  },
  {
    header: "Seller",
    list: [
      "history",
      "shop management",
      "product management",
      "order management",
      "event management",
    ],
  },
  {
    header: "Payment",
    list: [
      <Image
        key={999}
        src={"https://webill365.com/kh/asset/logo/webill365xppcbank-logo.svg"}
        height={1000}
        width={1000}
        priority
        alt="weebill"
        className="!w-[15rem] h-full"
      />,
    ],
  },
];
