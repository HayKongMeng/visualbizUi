"use client";
import Image from "next/image";
import React, { useState } from "react";
import CheckIcon from "../icons/SidebarIcon/Active/CheckIcon";
import DenyIcon from "../icons/SidebarIcon/Active/DenyIcon";
import { getPhoto } from "@/app/utils/util_function";

const Tabs = ({ allAppointment, allAppointmentAccepted }) => {
  const [selectedTab, setSelectedTab] = useState(1); // Default selected tab

  return (
    <div role="tablist" className="tabs bg-transparent h-full">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className={`tab h-[3.5rem] w-[25rem] flex items-center justify-center rounded-tl-2xl rounded-tr-2xl text-mid font-medium ${
          selectedTab === 1 ? "bg-primary text-white" : "bg-bg text-primary"
        }`}
        aria-label="Appointment Requests"
        checked={selectedTab === 1}
        onChange={() => setSelectedTab(1)}
      />
      <div
        role="tabpanel"
        className={`tab-content base-300 rounded-box py-4 ${
          selectedTab !== 1 ? "hidden" : ""
        }`}
      >
        <div className="table-container  overflow-y-scroll">
          <table className="table w-full text-sm">
            <thead className="sticky top-0 z-10 text-near_normal font-medium bg-[#F7F7F7]">
              <tr className=" grid grid-cols-12 font-medium">
                <th className="col-span-2 text-mid font-medium">Customer</th>
                <th className="col-span-3 text-mid mx-auto font-medium">
                  Service
                </th>
                <th className="col-span-4 text-mid font-medium">Date</th>
                <th className="col-span-3 text-mid mx-auto font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="w-full mt-6 gap-4 overflow-y-scroll">
              {allAppointment?.map((appointment, idx) => (
                <tr key={idx} className="grid grid-cols-12">
                  <td className="col-span-2">
                    <div className="flex items-center gap-8">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <Image
                            src={getPhoto(appointment.profileImg)}
                            alt="User"
                            width={400}
                            height={400}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-mid">
                          {appointment?.username}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="col-span-3 flex items-center justify-center text-mid font-medium">
                    <div className="border border-green-400 inline-block p-5 text-center rounded-xl text-green-400">
                      {appointment?.serviceName}
                    </div>
                  </td>
                  {/* date  */}
                  <td className="col-span-4 text-mid flex items-center">
                    {new Date(appointment?.startDate).toDateString()} -{" "}
                    {new Date(appointment?.startDate).toLocaleTimeString()}
                  </td>
                  <td className="col-span-3 flex justify-center text-near_normal">
                    <div className="flex gap-2">
                      <button
                        className="bg-primary text-white font-medium rounded-2xl small-btn"
                        onClick={() =>
                          document.getElementById("my_modal_1").showModal()
                        }
                      >
                        Accept
                      </button>
                      {/* accpet modal  */}
                      <dialog
                        id="my_modal_1"
                        className="modal top-0 overflow-auto overflow-y-hidden"
                      >
                        <div className="modal-box py-20 px-[25rem] overflow-hidden">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white  py-[20rem] rounded-lg shadow-lg p-6 w-full">
                              <div className="flex items-center">
                                <div className="p-6 bg-[#E5FAE8] rounded-full">
                                  <CheckIcon width="30px" height="30px" />
                                </div>
                                <div className="ml-3">
                                  <h3 className="text-normal font-medium mb-3">
                                    Accept Successful{" "}
                                  </h3>
                                  <p className="text-normal text-gray-500">
                                    The request accept Ssuccessful
                                  </p>
                                </div>
                              </div>
                              <div className="mt-4 flex justify-end modal-action">
                                <form method="dialog">
                                  <button className="mr-2 py-4 px-6 border border-gray-300 rounded-md text-gray-700 hover:bg-primary hover:text-white">
                                    Ok
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                      <button
                        className="bg-red-500 text-white font-medium rounded-2xl small-btn"
                        onClick={() =>
                          document.getElementById("my_modal_2").showModal()
                        }
                      >
                        Deny
                      </button>
                      <dialog id="my_modal_2" className="modal top-0">
                        <div className="modal-box py-20 px-[25rem] overflow-hidden">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white py-10 rounded-lg shadow-lg p-6 w-full">
                              <div className="flex items-center">
                                <div className="p-6 bg-red-100 rounded-full">
                                  <DenyIcon />
                                </div>
                                <div className="ml-3">
                                  <h3 className="text-normal font-medium mb-3">
                                    Deny Request
                                  </h3>
                                  <p className="text-normal text-gray-500">
                                    Are you sure you want to deny the request?
                                  </p>
                                </div>
                              </div>
                              <div className="mt-4 flex justify-end modal-action">
                                <form method="dialog">
                                  <button className="mr-2 py-4 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                                    Cancel
                                  </button>
                                </form>
                                <button className="py-4 px-7 bg-primary text-white rounded-md hover">
                                  Deny
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className={`ml-3 tab h-[3.5rem] w-[25rem] flex items-center justify-center rounded-tl-2xl rounded-tr-2xl text-mid font-medium ${
          selectedTab === 2
            ? "bg-teal-950 text-white"
            : "bg-gray-600/30 text-white"
        }`}
        aria-label="Appointment Accepted"
        checked={selectedTab === 2}
        onChange={() => setSelectedTab(2)}
      />
      <div
        role="tabpanel"
        className={`tab-content base-300 rounded-box py-4 ${
          selectedTab !== 1 ? "hidden" : ""
        }`}
      >
        <div className="table-container  overflow-y-scroll">
          <table className="table w-full text-sm">
            <thead className="sticky top-0 z-10 text-near_normal font-medium bg-[#F7F7F7]">
              <tr className=" grid grid-cols-12 font-medium">
                <th className="col-span-2 text-mid font-medium">Customer</th>
                <th className="col-span-3 text-mid mx-auto font-medium">
                  Service
                </th>
                <th className="col-span-4 text-mid font-medium">Date</th>
                <th className="col-span-3 text-mid mx-auto font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="w-full mt-6 gap-4 overflow-y-scroll">
              {allAppointmentAccepted?.map((accepted, idx) => (
                <tr key={idx} className="grid grid-cols-12">
                  <td className="col-span-2">
                    <div className="flex items-center gap-8">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <Image
                            src={getPhoto(accepted?.profileImg)}
                            alt="User"
                            width={400}
                            height={400}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-mid">
                          {accepted?.username}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="col-span-3 flex items-center justify-center text-mid font-medium">
                    <div className="border border-green-400 inline-block p-5 text-center rounded-xl text-green-400">
                      {accepted?.serviceName}
                    </div>
                  </td>
                  {/* date  */}
                  <td className="col-span-4 text-mid flex items-center">
                    {new Date(accepted?.startDate).toDateString()} -{" "}
                    {new Date(accepted?.startDate).toLocaleTimeString()}
                  </td>
                  <td className="col-span-3 flex justify-center text-near_normal">
                    <div className="flex gap-2">
                      <button
                        className="bg-primary text-white font-medium rounded-2xl small-btn"
                        onClick={() =>
                          document.getElementById("my_modal_1").showModal()
                        }
                      >
                        Cancel
                      </button>
                      {/* accpet modal  */}
                      <dialog
                        id="my_modal_1"
                        className="modal top-0 overflow-auto overflow-y-hidden"
                      >
                        <div className="modal-box py-20 px-[25rem] overflow-hidden">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white  py-[20rem] rounded-lg shadow-lg p-6 w-full">
                              <div className="flex items-center">
                                <div className="p-6 bg-[#E5FAE8] rounded-full">
                                  <CheckIcon width="30px" height="30px" />
                                </div>
                                <div className="ml-3">
                                  <h3 className="text-normal font-medium mb-3">
                                    Accept Successful{" "}
                                  </h3>
                                  <p className="text-normal text-gray-500">
                                    The request accept Ssuccessful
                                  </p>
                                </div>
                              </div>
                              <div className="mt-4 flex justify-end modal-action">
                                <form method="dialog">
                                  <button className="mr-2 py-4 px-6 border border-gray-300 rounded-md text-gray-700 hover:bg-primary hover:text-white">
                                    Ok
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
