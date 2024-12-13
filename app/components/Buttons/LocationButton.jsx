"use client";
import { useLocationStore } from "@/app/store/locationStore";
import { useStore } from "@/app/store/store";
import { useEffect } from "react";

const LocationButton = () => {
  const { currentLocation, setLocation } = useStore();
  const { setFoundLocation, current_user_location } = useLocationStore();
  useEffect(() => {
    console.log("current : ", current_user_location);
  }, [current_user_location]);

  return (
    <label
      onClick={() => {
        setFoundLocation([]);
        setLocation("");
      }}
      htmlFor="my_modal_location"
      className="flex gap-[1rem] group cursor-pointer items-center"
    >
      <p className="text-[1.4rem] group-hover:text-secondary leading-1">
        {current_user_location}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon size-[1.6rem] stroke-primary group-hover:stroke-secondary"
        viewBox="0 0 512 512"
      >
        <path
          d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="256"
          cy="192"
          r="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </label>
  );
};

export default LocationButton;
