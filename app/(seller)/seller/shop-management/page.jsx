"use client";
import React from "react";
import SellerProfileHeader from "../../components/SellerProfileHeader";
import DatePicker from "../../components/Shop Components/DatePicker";
import Image from "next/image";
import Button from "@/app/components/Button";
import ShopEditProfile from "../../components/ShopEditProfile";
import EditImage from "../../components/Shop Components/EdtiImage";
import { useQuery } from "@tanstack/react-query";
// import { shopManagement } from "@/app/services/client-services/seller/clientFetch";
import { Spinner } from "@nextui-org/react";
import { shopManagement } from "@/app/services/client-services/seller/shopManagement";

function ShopManagementPage() {
  const {
    data: shopData= {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["shopManagement"],
    queryFn: shopManagement,
  });
const {shopName,shopProfileImg,shopProfileCover,description,phoneNumber,lat,longitude} = shopData
  console.log(description)
  if (isError) {
    <div className="h-full flex justify-center items-center font-bold text-3xl">
     <div>There is an error while fetching.</div>
    </div>;
  }
  return (
    <div className="pl-5 h-full flex flex-col gap-10">
      <div className="">
        <SellerProfileHeader title={"Shop Management"} />
      </div>
      <>
        {isLoading ? (
          <div className="h-full flex justify-center items-center">
            <Spinner color="primary" label="Loading..." size="lg" />
          </div>
        ) : (
          <div className="grid grid-cols-3 overflow-y-scroll  h-full gap-5 ">
            <div className="col-span-2 border px-10 py-5 bg-bg  overflow-y-scroll h-full  flex flex-col rounded-2xl">
              <div className="flex flex-col gap-10 ">
                <div className="w-full h-[20rem] mt-5 bg-white px-9 py-7 rounded-2xl border border-gray-200 relative flex ">
                  <div className="w-[15rem] h-full rounded-xl">
                    <Image
                      src={"/images/eventseller.jpg"}
                      alt="Shop img"
                      className="rounded-2xl"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="self-end">
                    <EditImage />
                  </div>
                </div>

                <div className="w-full bg-white px-9 py-7 rounded-2xl border border-gray-200 items-center gap-3 flex flex-col">
                  <div className="w-full flex justify-between items-center">
                    <div className="  text-[1.8rem] font-semibold">Profile</div>
                    <div>
                      <ShopEditProfile />
                    </div>
                  </div>

                  <div className="flex gap-10 justify-around  w-full py-10">
                   
                      <div className="flex flex-col gap-5 " >
                        <div className="font-semibold">Full name</div>
                        <div className="capitalize">{shopName}</div>
                      </div>
              

                    <div className="flex flex-col gap-5">
                      <div className="font-semibold">Email</div>
                      <div>{shopData.user.email}</div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="font-semibold">Phone</div>
                      <div>{phoneNumber}</div>
                    </div>
                  </div>
                </div>
                <div className=" border px-9 py-7 bg-white w-full text-normal  flex gap-5 flex-col rounded-2xl">
                  <div className=" text-[1.8rem] font-semibold">Location</div>
                  <div className=" flex gap-5">
                    <div className="font-semibold pl-[10rem] flex border items-center px-5 rounded-2xl w-full">
                      Phnom Penh
                    </div>
                    <div className="w-[40rem]">
                      <Button>Save Change</Button>
                    </div>
                  </div>
                </div>
                <div className=" border px-9 py-7 w-full text-normal bg-white  flex gap-5 flex-col rounded-2xl">
                  <div className=" text-[1.8rem] font-semibold">
                    Description
                  </div>
                  <div className="w-full text-left text-[1.6rem]">
                    {description ? description : "No description" }
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-bg flex-col gap-[2rem] overflow-y-hidden justify-center w-full py-5 px-10 border rounded-2xl">
              <DatePicker />
              <div className="w-full h-full p-10 text-gray-700 flex flex-col gap-5">
                <div className="flex justify-between w-full border-b-1 border-black">
                  <h1 className="font-semibold">Day off</h1>
                  <Image
                    className="w-8 h-8"
                    src="/images/service_provider/icon/star.svg"
                    width={20}
                    height={20}
                    alt="map"
                  />
                </div>
                <div className="flex justify-between w-full">
                  <h1>January 6</h1>
                  <Image
                    className="w-8 h-8"
                    src="/images/service_provider/icon/Subtract.svg"
                    width={20}
                    height={20}
                    alt="map"
                  />
                </div>
                <div className="flex justify-between w-full">
                  <h1>January 14,15, 16</h1>
                  <Image
                    className="w-8 h-8"
                    src="/images/service_provider/icon/Subtract.svg"
                    width={20}
                    height={20}
                    alt="map"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default ShopManagementPage;
