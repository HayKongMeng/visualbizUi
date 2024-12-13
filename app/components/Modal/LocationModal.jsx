"use client";

import {
  fetchLocationByLatLon,
  fetchLocationBySearching,
} from "@/app/api/locationApi";
import { useLocationStore } from "@/app/store/locationStore";
import Image from "next/image";
import { useRef } from "react";
import { useEffect, useState } from "react";

const LocationModal = ({data}) => {
  const {
    setCurrentUserLocation,
    setFoundLocation,
    foundLocation,
    location,
    setLocationWhenGetData,
  } = useLocationStore();
  const [isRefresh, setRefresh] = useState(false);
  const [searchLoc, setSearchLoc] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFound, setFound] = useState(false);

  const inputLocRef = useRef(null);

  // fetch data location when search
  useEffect(() => {
    if (searchLoc.length >= 1) {
      setLoading(true);
      console.log(true);
      fetchLocationBySearching(searchLoc).then((data) => {
        if (data.length <= 0) {
          setFoundLocation([]);
          return;
        }
        setFoundLocation(data);
        setLoading(false);
      });
    } else {
      console.log(false);
    }
  }, [searchLoc, setFoundLocation]);

  useEffect(() => {
    console.log("Found data : " + foundLocation.length, foundLocation);
    console.log("obj location now : ", location);
  }, [foundLocation, location]);

  // getting current coords
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        console.log(latitude, longitude);
        fetchLocationByLatLon(latitude, longitude).then((data) => {
          console.log("data loc ", data);
          setLocationWhenGetData(data);
          setCurrentUserLocation(
            data?.address?.town ||
              data?.address?.state ||
              data?.address?.city ||
              data?.address?.village ||
              "Unknown"
          );
        });
      });
    }
  }, [isRefresh, setCurrentUserLocation, setLocationWhenGetData]);

  return (
    <main className="  h-[50rem] gap-[3.2rem] py-md_paddding">
      <section className="modal-action absolute right-[1rem] top-[-.5rem]">
        <label
          onClick={(e) => {
            inputLocRef.current.value = "";
          }}
          htmlFor={"my_modal_location"}
          className="cursor-pointer "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon size-[3rem] p-2 hover:duration-300 hover:bg-primary rounded-full hover:stroke-white stroke-black"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </label>
      </section>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col justify-center"
      >
        <h3 className="text-normal text-center w-full font-semibold">
          Please select your location
        </h3>
        <section className="grid grid-rows-[auto_1fr] gap-3 mt-md_margin w-[80%] mx-auto">
          <label
            htmlFor="input_location"
            className="grid grid-cols-[1fr_auto] gap-4"
          >
            <input
              ref={inputLocRef}
              onChange={(e) => setSearchLoc(e.target.value)}
              type="text"
              name="input_location"
              autoComplete="off"
              placeholder="search location"
              className="bg-bg text-normal py-[1rem] rounded-small px-[2rem] focus:outline-none"
            />
            <label
              onClick={() => setRefresh(!isRefresh)}
              htmlFor={"my_modal_location"}
              className="py-[1rem] px-[2rem] cursor-pointer rounded-small transition-all hover:scale-110 bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon size-[2.4rem] stroke-white"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="48"
                  d="M256 96V56M256 456v-40"
                />
                <path
                  d="M256 112a144 144 0 10144 144 144 144 0 00-144-144z"
                  fill="none"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="48"
                  d="M416 256h40M56 256h40"
                />
              </svg>
            </label>
          </label>
          {
            <ul
              id="hide-scrollbar"
              className={`${
                foundLocation.length >= 1 ? " h-[35rem]" : " h-0"
              } duration-300  flex flex-col max-h-[35rem]  gap-3   overflow-x-visible overflow-y-scroll`}
            >
              {searchLoc.length >= 1 &&
                foundLocation.length >= 1 &&
                foundLocation.map((currentLocation, idx) => (
                  <label
                    htmlFor="my_modal_location"
                    onClick={() => {
                      inputLocRef.current.value = "";
                      setCurrentUserLocation(
                        currentLocation?.address?.town ||
                          currentLocation?.address?.state ||
                          currentLocation?.address?.city ||
                          currentLocation?.address?.village ||
                          "Unknown"
                      );

                      setLocationWhenGetData({ ...currentLocation });
                    }}
                    key={idx}
                  >
                    <li className="text-normal rounded-small duration-200  group grid grid-cols-[1fr_auto] gap-10 items-center hover:bg-primary  cursor-pointer py-[1rem] px-[2rem]  bg-bg">
                      <span className="group-hover:text-white line-clamp-2">
                        {currentLocation?.display_name}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon size-[2rem] stroke-black group-hover:stroke-white"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M448 64L64 240.14h200a8 8 0 018 8V448z"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                      </svg>
                    </li>
                  </label>
                ))}
              {loading && (
                <div className="flex flex-col justify-center items-center mt-md_margin">
                  <Image
                    width={1000}
                    height={1000}
                    priority
                    alt="loading img"
                    src={"/images/loading.png"}
                    className="w-[30rem] h-[25rem] object-cover object-center"
                  />
                  <span className="text-normal">seaching....</span>
                </div>
              )}
            </ul>
          }
          {!foundLocation.length && searchLoc.length >= 1 && (
            <main className="flex flex-col items-center gap-4">
              <Image
                width={1000}
                height={1000}
                priority
                alt="not found location"
                src={"/images/not-found-location.png"}
                className="object-cover w-[30rem] h-full"
              />
              {/* <p className="text-normal font-medium text-danger">
                please try the correct location name
              </p> */}
            </main>
          )}
        </section>
      </form>
    </main>
  );
};

export default LocationModal;
