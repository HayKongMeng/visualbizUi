import React, { Fragment } from "react";
import ProductIcon from "../Icons/SidebarIcon/NonHover/ShopIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import UserIcon from "@/app/components/Icons/UserIcon";
import MoneyIcon from "../Icons/MoneyIcon";
import CustomerIcon from "../Icons/CustomerIcon";

function StatCard() {
  const statData = [
    {
      id: 1,
      title: "Total Sales",
      price: "$ 7500",
      icons: <MoneyIcon />,
    },
    {
      id: 2,
      title: "Total Customers",
      price: "7500",
      icons: <ProfileIcon className="w-[30px]" />,
    },
    {
      id: 3,
      title: "Total Products",
      price: "7500,00",
      icons: <ProductIcon className="w-[30px]" />,
    },
    {
      id: 4,
      title: "Customer",
      price: "7500",
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
              <section className="text-[1.4rem] text-primary font-semibold">
                {stat.price}
              </section>
              <section className="text-[1.2rem]">{stat.title}</section>
            </section>
          </section>
        </Fragment>
      ))}
    </section>
  );
}

export default StatCard;
