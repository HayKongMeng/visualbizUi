import React from "react";
import {
  Dropdown,
} from "@nextui-org/react";
import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditIcon";
import ThreeDotted from "./Icons/ThreeDotted";
import DownloadIcon from "./Icons/DownloadIcon";
import UpdateProductModal from "./UpdateProductModal";
import DeleteProductModal from "./DeleteProductModal";
import SellerProductManuallyRestockModal from "./Products/SellerProductManuallyRestockModal";

function SellerProductDropdown({ item }) {
  return (
    <section className="dropdown dropdown-bottom dropdown-end ">
      <section tabIndex={0} role="button" className="btn m-1 cursor-pointer">
        <ThreeDotted />
      </section>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[20rem]"
      >
        <li>
          <section className="flex items-center gap-5 text-[1.2rem]">
            <EditIcon />
            <section>
              <UpdateProductModal />
            </section>
          </section>
        </li>
        <li>
          <section className="flex items-center gap-5 text-[1.2rem]">
            <DownloadIcon />
            <SellerProductManuallyRestockModal />
          </section>
        </li>
      </ul>
    </section>
  );
}

export default SellerProductDropdown;
