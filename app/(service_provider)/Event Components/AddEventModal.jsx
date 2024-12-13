"use client";
import React, { useState } from "react";
import Button from "@/app/components/Button";
import { useForm } from "react-hook-form";
import { uploadImageAction } from "@/app/action/fileAction";
import { addEventAction } from "@/app/action/EventAction";
import ImageUploadInput from "@/app/(seller)/components/ImageUploadInput";
const AddEventModal = () => {
  const [eventImage, setEventImage] = useState(null);
  console.log("eventImage", eventImage);
  const handleEventPost = async (event) => {
    const formData = new FormData();
    formData.append("file", eventImage);
    console.log("event", event);
    const file = await uploadImageAction(formData);
    console.log("fileinModal", file);

    const newData = {
      eventTitle: event.eventTitle,
      eventDescription: event.eventDescription,
      eventImage: file.payload.fileName,
      startDate: event.startDate,
      endDate: event.endDate,
    };
    console.log("newEvent", newData);
    await addEventAction(newData);
    console.log("first", newData);
    document.getElementById("add_event_service_provider").close();
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleChangeImage = (image) => {
    setEventImage(image);
  };
  return (
    <div>
      <Button
        onClick={() =>
          document.getElementById("add_event_service_provider").showModal()
        }
        className="text-white text-[1.2rem] px-10 py-3"
      >
        Add event
      </Button>
      <dialog id="add_event_service_provider" className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-14">
          <h3 className="font-bold text-3xl">Add Event</h3>
          <div className="w-full mt-8  ">
            <form
              className=" flex flex-col gap-2 "
              // method="dialog"
              onSubmit={handleSubmit(handleEventPost)}
            >
              <div class="mb-5 flex flex-col gap-1">
                <label
                  htmlfor="large-input"
                  className="block mb-2 text-[1.4rem] text-gray-400"
                >
                  Pleas provide title of event
                </label>
                <input
                  type="text"
                  id="large-input"
                  {...register("eventTitle", { required: true })}
                  className="p-3 text-gray-400 border border-gray-300 rounded-lg bg-gray-50 "
                />
              </div>
              <div className="flex justify-between gap-8 mb-2">
                <div className="w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-[1.4rem] text-gray-400"
                  >
                    StartDate
                  </label>
                  <input
                    {...register("startDate")}
                    type="date"
                    id="large-input"
                    className="p-3 relative text-gray-400 border border-gray-300 rounded-lg bg-gray-50 w-full"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-[1.4rem] text-gray-400"
                  >
                    EndDate
                  </label>
                  <input
                    {...register("endDate")}
                    type="date"
                    id="large-input"
                    className="p-3 relative text-gray-400 border border-gray-300 rounded-lg bg-gray-50 w-full"
                  />
                </div>
              </div>
              <div class="mb-5">
                <label
                  htmlfor="large-input"
                  className="block mb-2 text-[1.4rem] text-gray-400"
                >
                  Please provide description of event
                </label>
                <input
                  {...register("eventDescription")}
                  type="text"
                  id="large-input"
                  className="block w-full px-5 align-top pb-[12rem] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[1.4rem] text-gray-400">
                  Choose cover photo
                </p>
                <ImageUploadInput handleUploadImage={handleChangeImage} />
              </div>
              <div className="flex justify-between mt-14 gap-8">
                <Button
                  className="text-primary w-[14rem] text-[1.4rem] bg-bg hover:bg-primary hover:text-white"
                  onClick={() =>
                    document
                      .getElementById("add_event_service_provider")
                      .close()
                  }
                  type="button" // Ensure this is set to "button"
                >
                  Close
                </Button>
                <Button
                  className="text-white w-[14rem] text-[1.4rem]"
                  type="submit"
                >
                  Post Event
                </Button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddEventModal;
