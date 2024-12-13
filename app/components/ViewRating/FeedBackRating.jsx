import React from "react";
import RateFeedbackModal from "../Modal/RateFeedbackModal";
import { SquareArrowOutUpRight } from "lucide-react";

const FeedBackRating = ({ idx = 1, type = "service" || "shop", rating }) => {
  const starsPercent = [80, 60, 40, 20, 10];
  return (
    <main className="rating-feedback flex-col flex gap-6 shadow-md p-md_paddding rounded-small">
      <h3 className="text-semi_header font-semibold">Review and Rating</h3>
      <section className="grid grid-cols-2 gap-6">
        <section className="left-side flex flex-col gap-4">
          <h3 className="text-big_header">{rating}</h3>
          <section className="stars flex gap-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg
                key={idx + "sdsads"}
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon size-[1.6rem] fill-secondary stroke-none"
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
          <p className="text-mid">100 Feedback & Rating</p>
        </section>
        <section className="right-side">
          {starsPercent.map((percent, idx) => (
            <p
              key={idx + "sdsfsdjhf"}
              className="grid grid-cols-[1rem_1fr] items-center gap-3 text-normal"
            >
              <span>{starsPercent.length - idx}</span>
              <span
                className={`h-[.6rem] bg-bg rounded-full relative after:content-[''] after:h-full after:bg-primary after:absolute after:top-0 after:left-0 after:w-[${percent}%] after:rounded-full after:z-10`}
              ></span>
            </p>
          ))}
        </section>
      </section>
      {/* <section className="grid grid-cols-2 gap-6 items-center justify-between">
        <p className="text-mid">Give us feedback</p>
        <main className="w-full">
          <label
            htmlFor={"my_modal_feedback" + idx + type}
            className="bg-primary rounded-small cursor-pointer py-[1rem] px-[2rem] inline-block w-full"
          >
            <p className="text-mid text-white font-medium flex gap-4 items-center justify-center">
              <SquareArrowOutUpRight className="stroke-white size-8" />
              Write Feedback
            </p>
          </label>
          <input
            type="checkbox"
            id={"my_modal_feedback" + idx + type}
            className="modal-toggle"
          />
          <section className="modal" role="dialog">
            <section className="modal-box max-w-[80rem]">
              <RateFeedbackModal idx={idx} type={type} />
            </section>
          </section>
        </main>
      </section> */}
    </main>
  );
};

export default FeedBackRating;
