"use client";
import DeleteEventModal from "@/app/(service_provider)/Event Components/DeleteEventModal";
import { deleteEventById } from "@/app/services/event.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

function EventCard({ data }) {
  const queryClient = useQueryClient();
  // const deleteEvent = await deleteEventById()
  const { data: session } = useSession();


  const mutation = useMutation({
    mutationFn: (request) =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/delete/${request}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }),
      onSettled: ()=> {
        queryClient.invalidateQueries({queryKey: ["event"]})
      },
    onSuccess: () => {
      toast.success("Event delete successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
    },
    onError: (error) => {
      toast.error(
        `There is an error while deleting event. Please try again ${error}`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          // transition: Bounce,
        }
      );
    },
  });
  async function handleDelete(id) {
   await mutation.mutate(id)
  }
  return (
    <div className="bg-bg border rounded-xl text-[1.4rem] hover:shadow-lg transition-all">
      <div className="flex">
        <div className="w-[30rem]">
          <Image
            width={1000}
            height={1000}
            alt="product img"
            priority
            src={`/${data.eventImage}`}
            className=" bg-bg rounded-l-xl h-[21rem]  object-cover "
          />{" "}
        </div>
        <div className="w-full flex justify-between flex-col bg-white border rounded-r-xl px-5 py-4">
          <div className="flex w-full flex-col gap-4">
            <div className="flex justify-between w-full  ">
              <div className="flex gap-5 items-center">
                <div>{data.eventTitle}</div>
              </div>
              <DeleteEventModal id={data.eventId} handleDelete={handleDelete} />
            </div>
            <div className="w-full">
              <div className="w-full border border-black/50 opacity-70 mb-4"></div>
              <div className="line-clamp-4 text-[1.2rem] mt-5 ">
                {data.eventDescription}
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-row justify-between items-center">
              <div className="text-[1.2rem] font-semibold">
                {data.startDate}
              </div>
              <div>
                <Link
                  href={`/service-provider/event-management/${data.eventId}`}
                  title="Event Details"
                  className="border px-5 py-2 rounded-xl bg-bg text-[1.2rem]"
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
