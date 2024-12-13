import React from "react";
import FeedBack from "../FeedBack";

const FeedbackModal = ({ type, idx, allFeedaback = [] }) => {
  return (
    <main className="gap-[3.2rem] py-md_paddding no-scrollbar">
      <section className="modal-action absolute right-[1rem] top-[-.5rem]">
        <label
          htmlFor={"my_modal_see_feedback" + idx + type}
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
      <section className="w-[90%] mx-auto flex flex-col gap-md_gap">
        {allFeedaback.map((customer, idx) => (
          <FeedBack customer={customer} key={idx} />
        ))}
      </section>
    </main>
  );
};

export default FeedbackModal;
