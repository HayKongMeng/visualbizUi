import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import UploadImage from "@/app/(seller)/components/UploadImage";
import Button from "@/app/components/Button";
import { getEventByIdAction, updateEventAction } from "@/app/action/EventAction";
import { uploadImageAction } from "@/app/action/fileAction";

const UpdateEventModal = ({ eventId }) => {
  const [event, setEvent] = useState(null);
  const [eventUpdateImage, setEventImage] = useState(null);
  const dialogRef = useRef(null);

  const getEventByIdFunc = async (id) => {
    try {
      const data = await getEventByIdAction(id);
      setEvent(data);
    } catch (error) {
      console.error("Error fetching event:", error);
    }
  };

  useEffect(() => {
    getEventByIdFunc(eventId);
  }, [eventId]);

  const handleUpdateEvent = async (updateEvent) => {
    const formData = new FormData();
    formData.append("file", eventUpdateImage);
    const file = await uploadImageAction(formData);
    const updateNewEvent = {
      eventTitle: updateEvent.eventTitle,
      eventDescription: updateEvent.eventDescription,
      eventImage: file.payload.fileName,
      startDate: updateEvent.startDate,
      endDate: updateEvent.endDate,
    };
    await updateEventAction(eventId, updateNewEvent);
    dialogRef.current.close();
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

  const handleClose = () => {
    dialogRef.current.close();
  };

  return (
    <div>
      <div
        onClick={() => dialogRef.current.showModal()}
        className="text-[1.2rem] py-3"
      >
        Update Event
      </div>
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-14">
          <h3 className="font-bold text-3xl">Update Event</h3>
          <div className="w-full mt-8">
            <form
              onSubmit={handleSubmit(handleUpdateEvent)}
              className="flex flex-col gap-2"
            >
              <div className="mb-5 flex flex-col gap-1">
                <label
                  htmlFor="large-input"
                  className="block mb-2 text-[1.4rem] text-gray-400"
                >
                  Please provide title of event
                </label>
                <input
                  {...register("eventTitle")}
                  defaultValue={event?.eventTitle}
                  type="text"
                  id="large-input"
                  className="p-3 text-gray-400 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div className="flex justify-between gap-8 mb-2">
                <div className="w-full">
                  <label
                    htmlFor="start-date"
                    className="block mb-2 text-[1.4rem] text-gray-400"
                  >
                    Start Date
                  </label>
                  <input
                    {...register("startDate")}
                    defaultValue={event?.startDate}
                    type="date"
                    id="start-date"
                    className="p-3 relative text-gray-400 border border-gray-300 rounded-lg bg-gray-50 w-full"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="end-date"
                    className="block mb-2 text-[1.4rem] text-gray-400"
                  >
                    End Date
                  </label>
                  <input
                    {...register("endDate")}
                    defaultValue={event?.endDate}
                    type="date"
                    id="end-date"
                    className="p-3 relative text-gray-400 border border-gray-300 rounded-lg bg-gray-50 w-full"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="large-input"
                  className="block mb-2 text-[1.4rem] text-gray-400"
                >
                  Please provide description
                </label>
                <input
                  {...register("eventDescription")}
                  defaultValue={event?.eventDescription}
                  type="text"
                  id="large-input"
                  className="block w-full px-5 align-top pb-[12rem] text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[1.4rem] text-gray-400">Choose cover photo</p>
                <UploadImage
                  handleUploadImage={handleChangeImage}
                  eventImage={event?.eventImage}
                />
              </div>
              <div className="flex justify-between mt-14 gap-8">
                <Button
                  type="button"
                  onClick={handleClose}
                  className="text-primary w-[14rem] text-[1.4rem] bg-bg hover:bg-primary hover:text-white"  
                >
                  Close
                </Button>
                <Button type="submit" className="text-white text-[1.2rem]">
                  Update Event
                </Button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateEventModal;
