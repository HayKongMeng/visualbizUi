import Image from "next/image";
import React from "react";

function SellerHeader() {
  return (
    <section className="w-full bg-primary h-[20rem] rounded-3xl p-10  flex justify-between items-center">
      <section className="h-full text-white flex justify-between flex-col">
        <section className="text-white text-[1.6rem]">May, 15th , 2024</section>
        <section className="">
          <section className="text-white text-[2rem] font-bold">
            Welcome back, <span className="text-yellow-500">Thanak Mech</span>
          </section>
          <section className="text-white text-[1.8rem]">
            Detailed information about your store
          </section>
        </section>
      </section>
      <section className="w-[160px]  h-full">
        <Image
          src="/svgs/dashimg.svg"
          width={200}
          height={200}
          alt="Dashboard Image"
        />
      </section>
    </section>
  );
}

export default SellerHeader;
