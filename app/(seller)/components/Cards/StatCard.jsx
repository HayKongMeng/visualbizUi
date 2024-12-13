import React, { Fragment } from "react";
import UserIcon from "@/app/components/Icons/UserIcon";
import MoneyIcon from "../Icons/MoneyIcon";
import CustomerIcon from "../Icons/CustomerIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import ProduIcon from "../Icons/ProductIcon";

function StatCard() {
  const statData = [
    {
      id: 1,
      title: "Total Sales",
      price: "$ 450",
      icons: <MoneyIcon />,
    },
    {
      id: 2,
      title: "Total Customers",
      price: "250",
      icons: <ProfileIcon className="w-[30px]" />,
    },
    {
      id: 3,
      title: "Total Products",
      price: "150",
      icons: <ProduIcon className="w-[30px]" />,
    },
    {
      id: 4,
      title: "Customer Request",
      price: "75",
      icons: <CustomerIcon />,
    },
  ];
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
      {statData.map((stat) => (
        <Fragment key={stat.id}>
          <section className="bg-bg rounded-3xl flex gap-5 p-8 items-center">
            <section className="bg-primary  p-5 rounded-full w-[50px] h-[50px] flex justify-center items-center">
              {stat.icons}
            </section>
            <section className="flex gap-4 flex-col">
              <section className="text-[1.8rem] text-primary font-semibold">
                {stat.price}
              </section>
              <section className="text-[1.8rem]">{stat.title}</section>
            </section>
          </section>
        </Fragment>
      ))}
    </section>
  );
}

export default StatCard;
