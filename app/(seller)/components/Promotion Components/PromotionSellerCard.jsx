"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ThreeDotted from "../Icons/ThreeDotted";
import PromotionSellerDropdown from "./PromotionSellerDropdown";
import AddPromotionModal from "@/app/(seller)/components/Promotion Components/AddPromotionModal";
import PromotionDetail from "@/app/(seller)/components/Promotion Components/PromotionDetail";
import { getPhoto } from "@/app/utils/util_function";
import Link from "next/link";
import { getPromotionById } from "@/app/services/promotion.service";

function PromotionSellerCard({ allPromotion }) {
  // console.log(allPromotion)
  // const [datas,setData] = useState()
  // useEffect(()=> {
  // async function getData(){
  //     const datas = await getPromotionById(data.promotionId);
  //     console.log(datas)
  //     setData(datas)

  // }
  // getData()

  // },[])
  // console.log(datas)
  // const dataid = await getPromotionById(data.promotionId)
  return (
    // <div className='w-[30rem] border rounded-2xl'>
    <>
      {" "}
      {allPromotion?.map((data,idx) => {
        return (
          <>
            <div className=" border rounded-2xl ">
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
                    {data?.percentage + "%"}
                  </div>
                  <div className="absolute top-3 right-5 rounded-full  ">
                    <PromotionSellerDropdown data={data} />
                  </div>
                </div>
              </div>

              <PromotionDetail data={data} idx={idx} />
              {/* <PromotionDetail data={data}/> */}
            </div>
          </>
        );
      })}
    </>
  );
}

export default PromotionSellerCard;
