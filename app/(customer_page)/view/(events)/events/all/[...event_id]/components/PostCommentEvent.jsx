"use client";
import { postCommentAction } from "@/app/action/postComment";
import React from "react";
import { useForm } from "react-hook-form";

const PostCommentEvent = ({ eventId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data.comment);
    await postCommentAction(parseInt(eventId[1]), data?.comment);
    reset();
  };

  return (
    <div className="h-fit w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-[1fr_auto] gap-6 w-full"
      >
        <label htmlFor="" className="">
          <input
            autoComplete="off"
            {...register("comment", { required: true, min: 10, max: 300 })}
            type="text"
            placeholder="write something"
            className="border text-normal focus:outline-none py-3 px-10 min-w-[40rem] w-full rounded-xl"
          />
          {/* {errors?.comment && <p>{errors?.message}</p>} */}
        </label>
        <button
          type="submit"
          className="py-3 text-normal px-10 rounded-xl hover:border-transparent transition-all bg-primary text-white"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostCommentEvent;
