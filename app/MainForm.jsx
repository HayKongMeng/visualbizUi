"use client";
import { useState } from "react";
import AddPromotion from "./AddPromotion";
import SelectProduct from "./SelectProduct";
const MainForm = () => {
  const [data, setData] = useState({
    title: "",
    percentage: "",
    stardate: "",
    enddate: "",
    description: "",
    profile: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const [activeTab, setActiveTab] = useState(0);

  const formElements = [
    <AddPromotion data={data} handleChange={handleChange} key={1} />,
    <SelectProduct
      id="hide-scrollbar"
      data={data}
      handleChange={handleChange}
      key={2}
    />,
  ];
  return (
    <div>
      <button
        className="text-white text-[1.4rem] px-10 py-4 bg-primary rounded-md "
        onClick={() => document.getElementById("add_promotions").showModal()}
      >
        Add promotion
      </button>
      <dialog id="add_promotions" className="modal">
        <div className="modal-box p-16 max-w-[70rem] ">
          <div className="flex flex-col justify-center ">
            <div>{formElements[activeTab]}</div>
            <div className="flex flex-pt-10 gap-6 py-10 justify-end">
              {activeTab === 0 ? (
                <button
                  onClick={() => setActiveTab(1)}
                  className="p-4 px-10 rounded-xl bg-primary text-white opacity-100"
                >
                  Select Product
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setActiveTab(0)}
                    className="p-4 px-10 rounded-xl bg-gray-100 opacity-100 hover:bg-primary hover:text-white"
                  >
                    Select Product
                  </button>
                  <button
                    onClick={() => console.log(data)}
                    className="p-4 px-8 rounded-xl bg-primary text-white"
                  >
                    Submit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MainForm;
