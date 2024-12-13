import Image from "next/image";
import React from "react";

const CardOffer = ({ idx = 1, data }) => {
  return (
    <main className="grid grid-cols-2 gap-big_gap">
      <div className={`${idx % 2 == 0 ? "order-2" : "order-[-1]"}`}>
        <Image
          src={data?.img}
          width={1000}
          height={1000}
          alt="team picture"
          priority
          className="object-cover h-[30rem] object-center rounded-md"
        />
      </div>
      <div className="flex items-center justify-start">
        <div className="flex flex-col gap-6">
          <p className="text-normal font-medium">0{idx + 1}</p>
          <div className="flex flex-col gap-2">
            <h3 className="text-[2rem] font-semibold">{data?.title}</h3>
            <p className="text-mid">{data?.detail}</p>
          </div>
          <p className="text-mid bg-primary hover:scale-110 py-[.5rem] px-[1.6rem] cursor-pointer rounded-full self-start text-white group transition-all flex gap-4 items-center">
            {data?.tag}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon size-[1.8rem] stroke-white transition-all group-hover:translate-x-1"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  // stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="48"
                  d="M268 112l144 144-144 144M392 256H100"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default CardOffer;
