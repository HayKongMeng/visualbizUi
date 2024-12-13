"use client"
import React, { useState } from "react";
import ThreeDotted from "../icons/ThreeDotted";
import DeleteIcon from "../components/Icons/DeleteIcon";
import DeleteEventModal from "./DeleteEventModal";
import EditIcon from "../components/Icons/EditIcon";
import UpdateEventModal from "./UpdateEventModal";
import { deleteEventById } from "@/app/services/event.service";


function EventServiceProviderDropdown({data}) {
  console.log(data)
  const [id , setId] = useState();
  console.log("id", id);
  // const remove = await deleteEventById()
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="bg-bg m-1  p-2 cursor-pointer rounded-full">
        <ThreeDotted />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1]  menu p-2 shadow bg-base-100 rounded-box w-[15rem]"
      >
        <li>
          <div className="flex items-center gap-5 text-[1.2rem] hover:bg-red-500">
            <DeleteIcon />
            <div className="mx-2">
              <DeleteEventModal data={data} />
            </div>
          </div>{" "}
        </li>
        <li onClick={()=>setId(data.eventId)}>
         
          <div className="flex items-center gap-5 text-[1.2rem]">
            <EditIcon />
            <div>
              {/* <UpdateProductModal /> */}
              <UpdateEventModal data={data} eventId={id}/>
            </div>
          </div>{" "}
        </li>
     
      </ul>
    </div>
  );
}

export default EventServiceProviderDropdown;
