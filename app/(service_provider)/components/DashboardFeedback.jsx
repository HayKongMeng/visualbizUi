"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../service-provider/dashboard/Style.module.css";
import { Pagination } from "@nextui-org/react";
import { getPhoto } from "@/app/utils/util_function";
import { idText } from "typescript";

const DashboardFeedback = ({ allfeedback }) => {
  console.log("all feedback : ", allfeedback);

  return (
    <div>
      <div className="overflow-x-auto bg-[#F7F7F7] p-10 rounded-xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-normal">ID</th>
              <th className="text-normal">Customer</th>
              <th className="text-normal">Feedback</th>
              <th className="text-normal">Full Price</th>
              <th className="text-normal">Rating</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allfeedback?.map((feedback, index) => (
              <tr key={index}>
                <th className="text-mid text-gray-500">{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <Image
                          src={getPhoto(feedback?.profileImg)}
                          width={1000}
                          height={1000}
                          alt="picture"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-mid">
                        {feedback?.customerName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-mid text-gray-500">{feedback?.feedback}</td>
                <td className="text-mid text-gray-500">
                  {feedback?.fullprice}
                </td>
                <td className="text-mid text-gray-500">{feedback?.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardFeedback;
