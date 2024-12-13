import React from "react";
import ThreeDotted from "../Icons/ThreeDotted";
import DeleteIcon from "../Icons/DeleteIcon";
import DeleteServiceModal from "./DeleteServiceModal";
import EditIcon from "../Icons/EditIcon";
import UpdateServiceModal from "./UpdateServiceModal";

function ServiceProviderDropdown({ service_id }) {
  console.log("serviceId", service_id);
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
              <DeleteServiceModal service_id={service_id} />
            </div>
          </div>{" "}
        </li>
        <li>
          {" "}
          <div className="flex items-center gap-5 text-[1.2rem]">
            <EditIcon />
            <div>
              {/* <UpdateProductModal /> */}
              <UpdateServiceModal />
            </div>
          </div>{" "}
        </li>
      </ul>
    </div>
  );
}

export default ServiceProviderDropdown;
