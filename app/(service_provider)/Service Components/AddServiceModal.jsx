"use client";
import React, { useState } from "react";
import Button from "@/app/components/Button";
import UploadImage from "@/app/(seller)/components/UploadImage";
import { uploadImageAction } from "@/app/action/fileAction";
import { useForm } from "react-hook-form";
import { createServiceAction } from "@/app/action/createServiceAction";

const AddServiceModal = () => {
  const [serviceImage, setServiceImage] = useState(null);
  console.log("serviceImage", serviceImage);
  const handleServicePost = async (service) => {
    const formData = new FormData();
    formData.append("file", serviceImage);
    console.log("service", service);
    const file = await uploadImageAction(formData);
    console.log("fileInModal", file);
    const newService = {
      serviceName: service.serviceName,
      servicePrice: service.servicePrice,
      serviceDescription: service.serviceDescription,
      serviceImg: file.payload.fileName,
      categoryId: service.categoryId,
      active: service.active == 1 ? true : false,
    };
    console.log("newService", newService);
    await createServiceAction(newService);
    console.log("firsttttt", newService);
    document.getElementById("add_event_service_provider").close();
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  const handleChangeImage = (image) => {
    setServiceImage(image);
  };
  return (
    <div>
      <Button
        onClick={() =>
          document.getElementById("add_event_service_provider").showModal()
        }
        className="small-btn text-white "
      >
        Add New Service
      </Button>
      <dialog id="add_event_service_provider" className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-14 ">
          <h3 className="font-bold text-3xl">Add Service</h3>
          <div className="w-full mt-8  ">
            <form
              onSubmit={handleSubmit(handleServicePost)}
              className=" flex flex-col gap-2 "
              method="dialog"
            >
              <div class="mb-5 flex flex-col gap-1">
                <label
                  htmlfor="large-input"
                  className="block mb-2 text-[1.4rem] text-gray-400"
                >
                  Pleas provide Service Name
                </label>
                <input
                  {...register("serviceName")}
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
                  Pleas provide Price
                </label>
                <input
                  {...register("servicePrice")}
                  type="text"
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
                    category
                  </label>
                  <select
                    {...register("categoryId", { valueAsNumber: true })}
                    name="category"
                    id="category"
                    className="w-full p-3 text-gray-400 border border-gray-300 rounded-lg bg-gray-50 "
                  >
                    <option className="text-2xl" value={14}>
                      Salon
                    </option>
                    <option className="text-2xl" value={15}>
                      Hair Cut
                    </option>
                  </select>
                </div>
                <div className="w-[50%] ">
                  <label
                    htmlfor="large-input"
                    className="block mb-2 text-[1.4rem] text-gray-400"
                  >
                    active
                  </label>
                  <select
                    {...register("active", { valueAsNumber: true })}
                    name="active"
                    id="active"
                    className="w-full p-3 text-gray-400 border border-gray-300 rounded-lg bg-gray-50 "
                  >
                    <option className="text-2xl" value={1}>
                      true
                    </option>
                    <option className="text-2xl" value={0}>
                      false{" "}
                    </option>
                  </select>
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
                  {...register("serviceDescription")}
                  type="text"
                  id="large-input"
                  className="block w-full px-5 align-top pb-[12rem] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[1.4rem] text-gray-400">
                  Choose Service photo
                </p>
                <UploadImage handleServiceImage={handleChangeImage} />
              </div>
              <div className="flex justify-between mt-14 gap-8">
                <Button
                  className="text-primary text-[1.2rem] bg-bg"
                  onClick={() => {
                    document
                      .getElementById("add_event_service_provider")
                      .close();
                  }}
                >
                  Close
                </Button>
                <Button className="text-white text-[1.2rem]" type="submit">
                  Post Service
                </Button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddServiceModal;
