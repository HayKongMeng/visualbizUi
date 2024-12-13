"use client";
import ProfileHeader from "./ProfileHeader";
import WelcomeBox from "./WelcomeBox";
import {
  Calendar,
  Radio,
  RadioGroup,
  Button,
  ButtonGroup,
  cn,
} from "@nextui-org/react";
import {
  today,
  getLocalTimeZone,
  startOfWeek,
  startOfMonth,
} from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LocationModal from "@/app/components/Modal/LocationModal";
import LocationButton from "@/app/components/Buttons/LocationButton";
import EditProfile from "./EditProfile";
import EditProfileModal from "./EditProfileModal";
import { getPhoto } from "@/app/utils/util_function";

const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "flex-none m-0 h-8 bg-content1 hover:bg-content2 items-center justify-between",
          "cursor-pointer rounded-full border-2 border-default-200/60",
          "data-[selected=true]:border-primary"
        ),
        label: "text-tiny text-default-500",
        labelWrapper: "px-1 m-0",
        wrapper: "hidden",
      }}
    >
      {children}
    </Radio>
  );
};
const AppointmentContent = ({ data }) => {
  let defaultDate = today(getLocalTimeZone());
  let [value, setValue] = useState(defaultDate);
  let { locale } = useLocale();

  let now = today(getLocalTimeZone());
  let nextWeek = startOfWeek(now.add({ weeks: 1 }), locale);
  let nextMonth = startOfMonth(now.add({ months: 1 }));

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // You can handle the selected file here
    }
  };

  useEffect(()=> {
    console.log("value : ",value);
  },[value])

  return (
    <section className=" w-full h-full  bg-white text-black">
      <section className="flex flex-col gap-5">
        <ProfileHeader title={"Shop Management"} />
        <section className="grid grid-rows-[auto_1fr] gap-5 w-full ">
          <div className="flex flex-wrap">
            <div className="w-full md:w-7/12 h-full p-4  text-gray-200">
              {/* profile  */}
              <div className="w-full flex gap-16 items-center">
                <div className="relative w-[10rem] h-[10rem] bg-black rounded-full">
                  <Image
                    className="rounded-full"
                    src={getPhoto(data?.shopProfileImg)}
                    alt="profile"
                    width={224}
                    height={224}
                    layout="fixed"
                  />
                  <button className="absolute z-10 bottom-2 right-2 bg-red-500 text-white rounded-full p-2">
                    <Image
                      className="w-5 h-5"
                      src="/images/service_provider/icon/recycle-bin.svg"
                      width={20}
                      height={20}
                      alt="map"
                    />
                  </button>
                </div>
                <div>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file-upload">
                    <div className="w-auto h-9 px-4 py-7 rounded-lg bg-transparent border border-gray-200 justify-center items-center gap-3 inline-flex cursor-pointer">
                      <div className="text-center text-gray-900 text-normal font-semibold">
                        Upload new photo
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* profile info  */}
              <div className="w-full mt-10  px-9 py-7 rounded-2xl border border-gray-200 items-center gap-3">
                <div className="text-center w-full text-normal font-semibold flex justify-between mb-5 items-center">
                  <div className="text-center text-normal font-bold">
                    Profile Info
                  </div>
                  {/* 
                  <Button
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                    className="w-auto h-9 px-10 py-6 rounded-xl border bg-transparent border-gray-200 justify-center items-center gap-3 inline-flex"
                  >
                    <div className="text-center text-gray-400 text-normal font-semibold">
                      Edit
                    </div>
                  </Button> */}
                </div>

                {/* <dialog id="my_modal_2" className="modal ">
                  <div className="modal-box px-0 flex justify-center bg-white shadow-none">
                    <EditProfile />
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog> */}
                <div className=" h-auto w-full flex justify-between mb-4 ">
                  <div class="w-1/3 mb-4 h-auto">
                    <h1 className="text-normal font-semibold text-gray-500">
                      Full name
                    </h1>
                    <h1 className="text-normal text-black mt-2">{data?.shopName}</h1>
                  </div>
                  <div class=" mb-4 h-auto">
                    <h1 className="text-normal font-semibold text-gray-500">
                      Email
                    </h1>
                    <h1 className="text-normal text-black mt-2">
                      {data?.email}
                    </h1>
                  </div>
                  <div class=" mb-4 h-auto">
                    <h1 className="text-normal font-semibold text-gray-500">
                      Phone
                    </h1>
                    <h1 className="text-normal text-black mt-2">{data?.phoneNumber}</h1>
                  </div>
                </div>
                {/* <div className="w-full mt-10   rounded-2xl   items-center gap-3">
                  <div className="w-full flex items-center justify-between">
                    <Button className="w-auto h-9 px-5 py-6 bg-black  rounded-lg border border-gray-200 justify-center item items-center gap-3 inline-flex">
                      <div className="text-center text-gray-300 3xl:text-near_normal text-small_title font-semibold">
                        Save change
                      </div>
                    </Button>
                  </div>
                </div> */}
                <EditProfileModal data={data}/>
              </div>
              {/* Location  */}
              <div className="w-full mt-10  px-9 py-7 rounded-2xl border border-gray-200 items-center gap-3">
                <div className="text-center w-full text-normal font-semibold flex justify-between mb-5 items-center">
                  <div className="text-center text-normal font-bold">
                    Location
                  </div>
                </div>
                <div className="w-[100%] h-9 px-4 py-10 rounded-lg border border-gray-200  item items-center gap-3 inline-flex">
                  <div className="text-center text-gray-900 text-normal font-semibold flex items-center gap-5">
                    <LocationButton />
                    <input
                      type="checkbox"
                      id={"my_modal_location"}
                      className="modal-toggle"
                    />
                    <section className="modal" role="dialog">
                      <section className="modal-box max-w-[60rem]">
                        <LocationModal data={data} />
                      </section>
                    </section>
                  </div>
                </div>
              </div>
              <div className="w-full mt-10  px-9 py-7 rounded-2xl border border-gray-200 items-center gap-3">
                <div className="w-full h-full  text-center text-gray-200 mb-4">
                  <div className="w-full  rounded-2xl  border-gray-200 items-center gap-3">
                    <div className="text-center w-full text-normal font-semibold flex justify-between mb-5 items-center">
                      <div className="text-center text-normal font-bold mt-5">
                        Description
                      </div>
                    </div>
                    <p className="w-full text-left text-[1.4rem]">
                      {data?.description}
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12  h-full  text-center text-gray-700">
              <div className="flex flex-col gap-4  w-full h-full p-4 bg-white">
                <div className="p-4 text-2xl">
                  <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
                    <Calendar
                      aria-label="Date (Presets)"
                      bottomContent={
                        <RadioGroup
                          aria-label="Date precision"
                          classNames={{
                            base: "w-full pb-2 text-2xl",
                            label: "text-2xl",
                            wrapper:
                              "-my-2 py-2 px-3 gap-1 flex-nowrap max-w-[40rem]",
                          }}
                          defaultValue="exact_dates"
                          orientation="horizontal"
                        >
                          {/* Radio buttons can be added here */}
                        </RadioGroup>
                      }
                      classNames={{
                        content: "w-full h-[400px] p-0 text-2xl",
                        cell: "text-2xl flex items-center justify-center h-[50px] w-[60px]",
                        headerCell: "text-4xl bg-white font-bold",
                        thead: "text-2xl",
                        headerCellActive: "text-4xl bg-white font-bold",
                        header: "bg-white font-bold text-description",
                        headerWrapper: "text-2xl",
                        headerCellActive:
                          "text-2xl bg-black text-white font-bold",
                      }}
                      focusedValue={value}
                      nextButtonProps={{
                        variant: "bordered",
                      }}
                      prevButtonProps={{
                        variant: "bordered",
                      }}
                      value={value}
                      onChange={setValue}
                      onFocusChange={setValue}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap h-3/6">
                  <div className="w-full  h-full p-10 text-gray-700">
                    <div className="flex justify-between w-full border-b-1 border-black mb-10">
                      <h1>Day off</h1>
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
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default AppointmentContent;
