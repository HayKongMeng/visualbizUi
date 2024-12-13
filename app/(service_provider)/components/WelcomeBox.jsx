import Image from "next/image";
import React from "react";

const WelcomeBox = ({shopName}) => {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  return (
    <section className="w-full bg-primary h-[20rem] rounded-3xl p-10  flex justify-between items-center">
      <section className="h-full text-white flex justify-between flex-col">
        <section className="text-white text-[1.2rem]">
          {formattedDate}
        </section>
        <section className="">
            <section className="text-white text-[2rem] font-bold">
            Welcome back, <span  className="text-yellow-500">{shopName}</span>
          </section>
          <section className="text-white text-[1.2rem]">
            Detailed information about your store
          </section>
        </section>
      </section>
      <section className="w-[160px]  h-full">
        <Image
          src="/svgs/dashboard-img.svg"
          width={200}
          height={200}
          alt="Dashboard Image"
        />
      </section>
    </section>
  );
}

export default WelcomeBox;
