import React from "react";
import ThreeDotted from "../Icons/ThreeDotted";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import DeletePromotionModal from "./DeletePromotionModal";
import EditPromotionModal from "./EditPromotionModal";

function PromotionServiceProviderDropdown({data}) {
  console.log(data)
  return (
    <div className="dropdown dropdown-bottom dropdown-end ">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1  p-2 cursor-pointer rounded-full"
      >
        <ThreeDotted />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1]  menu p-2 shadow bg-base-100 rounded-box w-[15rem] focus:bg-bg"
      >
        <li>
          <div className="flex items-center gap-5 text-[1.2rem] hover:bg-bg focus:bg-bg">
            <DeleteIcon />

            <div className="mx-2">
              <DeletePromotionModal data={data} />
            </div>
          </div>{" "}
        </li>
        <li>
          {" "}
          <div className="flex items-center gap-5 text-[1.2rem]">
            <EditIcon />
            <EditPromotionModal/>
          </div>{" "}
        </li>
      </ul>
    </div>
  );
}

export default PromotionServiceProviderDropdown;
