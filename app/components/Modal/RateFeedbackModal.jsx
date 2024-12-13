"use client";
import { setToast } from "@/app/utils/util_function";
import React, { useState } from "react";

const RateFeedbackModal = ({ idx, type }) => {
  const [starRating, setStarRating] = useState(-1);
  return (
    <main className="  h-[60rem] gap-[3.2rem]">
      <section className="modal-action absolute right-[1rem] top-[-.5rem]">
        <label
          htmlFor={"my_modal_feedback" + idx + type}
          className="cursor-pointer "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon size-[3rem] p-2 hover:duration-300 hover:bg-primary rounded-full hover:stroke-white stroke-black"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              //   stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </label>
      </section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col gap-10 py-[10rem] w-[60%] mx-auto"
      >
        <h3 className="text-semi_header text-center w-full font-semibold">
          Rating Feedback
        </h3>
        <section className="give-stars p-10 border rounded-md flex flex-col justify-center items-center gap-6">
          <section className="flex  gap-6 items-center">
            {Array.from({ length: 5 }).map((star, idx) => (
              <svg
                onMouseOver={() => setStarRating(idx)}
                onClick={() => setStarRating(idx)}
                key={idx}
                xmlns="http://www.w3.org/2000/svg"
                className={`ionicon size-[3rem] hover:fill-secondary cursor-pointer ${
                  idx <= starRating ? " fill-secondary " : "fill-none "
                }  stroke-secondary `}
                viewBox="0 0 512 512"
              >
                <path
                  d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                  // fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
              </svg>
            ))}
          </section>
          <p className="text-mid hover:text-secondary cursor-pointer">
            Give stars for us
          </p>
        </section>
        <textarea
          placeholder="pleease give us some feedback of your experience"
          name="feedback"
          id="feedbackarea"
          className="w-full border rounded-md min-h-[10rem] max-h-[20rem] p-6 text-mid focus:outline-none"
        ></textarea>
        <button
          onClick={() => setToast("success", "🥳 Thank you for your feedback")}
          className="w-full rounded-small py-[1rem] px-[2rem] text-normal bg-primary text-white font-medium flex gap-4 items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon stroke-white size-[2rem]"
            viewBox="0 0 512 512"
          >
            <path
              d="M53.12 199.94l400-151.39a8 8 0 0110.33 10.33l-151.39 400a8 8 0 01-15-.34l-67.4-166.09a16 16 0 00-10.11-10.11L53.46 215a8 8 0 01-.34-15.06zM460 52L227 285"
              fill="none"
              //   stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
          Send Feedback
        </button>
      </form>
    </main>
  );
};

export default RateFeedbackModal;
