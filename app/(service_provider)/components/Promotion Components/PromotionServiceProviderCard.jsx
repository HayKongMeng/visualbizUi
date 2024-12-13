import Image from "next/image";
import React from "react";
import ThreeDotted from "../Icons/ThreeDotted";
import PromotionServiceProviderDropdown from "./PromotionServiceProviderDropdown";
import PromotionDetail from "./PromotionDetail";
import { getPhoto } from "@/app/utils/util_function";


function PromotionServiceProviderCard({data}) {
  console.log(data)
  return (
    // <div className='w-[30rem] border rounded-2xl'>
    <div className=" border rounded-2xl">
      <div className=" h-[20rem] relative">
        <Image
          src={getPhoto(data?.promotionImage)}
          className="rounded-2xl"
          alt="Event-Img"
          width={10000}
          height={10000}
        />
        <div className="flex justify-between ">
          <div className="absolute font-semibold py-2 text-[1rem] px-5 left-5 top-3 bg-green-100 rounded-full">
            {data?.percentage +"%"}
          </div>
          <div className="absolute top-3 right-5 rounded-full  ">
            <PromotionServiceProviderDropdown data={data} />
          </div>
        </div>
      </div>
      <PromotionDetail data={data} />
    </div>
  );
}

export default PromotionServiceProviderCard;
