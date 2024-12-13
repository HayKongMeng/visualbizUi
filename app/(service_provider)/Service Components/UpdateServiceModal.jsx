"use client"
import React from 'react'
import Image from "next/image";
import ImageUploadInput from '@/app/(seller)/components/ImageUploadInput';
import UpdateIcon from '../icons/SidebarIcon/Active/UpdateIcon';
import Button from '@/app/components/Button';

const UpdateServiceModal = () => {
  return (
    <div>
      <div onClick={() => document.getElementById("update_event_service_provider").showModal()} className=" text-[1.2rem] py-3">
        Update 
       
      </div>
      <dialog id="update_event_service_provider" className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-14 3xl:overflow-hidden">
          <h3 className="font-bold text-3xl">Update Service</h3>
          <div className="w-full mt-8  ">
          <form className=" flex flex-col gap-2 " method="dialog">
              <div class="mb-5 flex flex-col gap-1">
                <label
                  htmlfor="large-input"
                  className="block mb-2 text-[1.4rem] text-gray-400"
                >
                  Pleas provide Service Name
                </label>
                <input
                  type="text"
                  id="large-input"
                  className="p-3 text-gray-400 border border-gray-300 rounded-lg bg-gray-50 "
                />
              </div>

              <div class="mb-5 flex flex-col gap-1">
                <label
                  htmlfor="large-input"
                  className="block mb-2 text-[1.4rem] text-gray-400"
                >
                  Pleas provide Service Date
                </label>
                <input
                  type="date"
                  id="large-input"
                  className="p-3 text-gray-400 border border-gray-300 rounded-lg bg-gray-50 "
                />
              </div>

              <div class="mb-5 flex gap-1">
                <div className="w-[50%] ">
                <label
                  htmlfor="large-input"
                  className="block mb-2 text-[1.4rem] text-gray-400"
                >
                  Start Time
                </label>
                <input
                  type="time"
                  id="large-input"
                  className="w-full p-3 text-gray-400 border border-gray-300 rounded-lg bg-gray-50 "
                />
                </div>

                <div className="w-[50%] ">
                <label
                  htmlfor="large-input"
                  className="block mb-2 text-[1.4rem] text-gray-400"
                >
                  End Time
                </label>
                <input
                  type="time"
                  id="large-input"
                  className="w-full p-3 text-gray-400 border border-gray-300 rounded-lg bg-gray-50 "
                />
                </div>
              </div>


              <div class="mb-5">
                <label
                  htmlfor="large-input"
                  className="block mb-2 text-[1.4rem] text-gray-400"
                >
                  Please provide Service Description
                </label>
                <input
                  type="text"
                  id="large-input"
                  className="block w-full px-5 align-top pb-[12rem] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[1.4rem] text-gray-400">
                  Choose Service photo
                </p>
                <ImageUploadInput/>
              </div>
              <div className="flex justify-between mt-14 gap-8">
                <Button className="text-primary text-[1.2rem] bg-bg">
                  Close
                </Button>
                <Button className="text-white text-[1.2rem]">
                  Update
                </Button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default UpdateServiceModal