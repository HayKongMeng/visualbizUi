import PageChart from "@/app/(customer_page)/view/chart/page";
import Image from "next/image";
import React from "react";

const page = async () => {
  return (
    <>
      <div className=" h-full ">
        <div className="h-full">
          <div className="min-h-full h-full  rounded-2xl grid grid-rows-[auto_1fr] gap-6">
            <div className="grid grid-cols-4 gap-6">
              {titles.map((title, idx) => (
                <div
                  key={idx}
                  className="shadow-lg cursor-pointer transition-all hover:scale-[1.01] p-6 bg-[linear-gradient(to_right_,#6366F1_,#3B82F6)] flex flex-col justify-between rounded-[2rem] h-[12rem]"
                >
                  <div>
                    <h3 className="text-normal font-medium text-white">
                      {title.title}
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-big_header font-semibold text-white">
                      200
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-[70rem_1fr] gap-6">
              {/* <PageChart /> */}
              <div className="p-10 bg-white rounded-2xl shadow-sm">
                <div>
                  <h3 className="text-normal font-medium">Welcome</h3>
                </div>
                <div>asda</div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-normal font-medium">Products</h3>
              <div className="grid grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((item, idx) => (
                  <div>
                    <Image
                      src={"/images/product-imgs/cam.jpg"}
                      width={1000}
                      height={1000}
                      alt="product img"
                      className="rounded-xl size-[20rem"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="size-[30rem] bg-red-300"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

const titles = [
  { title: "Total Sales" },
  { title: "Total Customers" },
  { title: "Total Products" },
  { title: "Customer Requests" },
];
