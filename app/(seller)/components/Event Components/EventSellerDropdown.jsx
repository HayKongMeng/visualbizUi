"use client";
import React, { useState } from "react";
import ThreeDotted from "../Icons/ThreeDotted";
import DeleteIcon from "../Icons/DeleteIcon";
import DeleteEventModal from "./DeleteEventModal";
import EditIcon from "../Icons/EditIcon";
import UpdateEventModal from "./UpdateEventModal";


function EventSellerDropdown({ data }) {
  console.log(data)
  const [id , setId] = useState();
  console.log("id", id);
  // const data = await deleteEventById();
  // console.log(data)
  // deleteEventId();
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="bg-bg m-1  p-2 cursor-pointer rounded-full"
      >
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
              <DeleteEventModal event_id={data.eventId} />
            </div>
          </div>{" "}
        </li>
        <li onClick={()=>setId(data.eventId)}>
          {" "}
          <div className="flex items-center gap-5 text-[1.2rem]">
            <EditIcon />
            <div>
              {/* <UpdateProductModal /> */}
              {/* <UpdateEventSellerModalV2 data={data} event_id={id}/> */}
               <UpdateEventModal data={data} eventId={id} />
            </div>
          </div>{" "}
        </li>
      </ul>
    </div>
  );
}

export default EventSellerDropdown;
