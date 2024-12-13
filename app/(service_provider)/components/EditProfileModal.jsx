import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import React from "react";

const EditProfileModal = ({edit,data}) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="w-[100%] p-2 bg-gray-200 rounded-md hover:text-white hover:bg-primary"
        onClick={() =>
          document.getElementById("edit_profile_service_provider").showModal()
        }
      >
        Edit
      </button>
      <dialog id="edit_profile_service_provider" className="modal">
        <div className="modal-box max-w-[50rem] p-10">
          <form method="dialog">
            <button className=" text-3xl  absolute right-6 top-6">
              ✕
            </button>
          </form>
          <form action="">
            <p className="text-start text-3xl">Edit Pofile</p>
            <div className="flex justify-center mb-4">
              <Image
                src={getPhoto(data?.shopProfileImg)} // Replace with the actual path to the uploaded image
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full w-40 h-40"
              />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 items-center">
                <label className="block font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="mama"
                  className="mt-1 text-normal w-full border-b border-gray-300 py-1 "
                />
              </div>
              <div className="mt-6 flex gap-4 items-center">
                <label className="block font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="mama@gmail.com"
                  className="mt-1 text-normal w-full border-b border-gray-300 py-1 "
                />
              </div>

              <div className="mt-6 flex gap-4 items-center">
                <label className="block font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  placeholder="01077778888"
                  className="mt-1 text-normal w-full border-b border-gray-300 py-1"
                />
              </div>
              <div className="flex justify-end ">
                <button className="  bg-primary text-white py-2 px-8 rounded-md ">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default EditProfileModal;
