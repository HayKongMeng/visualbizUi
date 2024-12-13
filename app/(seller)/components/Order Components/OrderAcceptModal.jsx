import React from "react";
import Button from "@/app/components/Button";
import Image from "next/image";

const OrderAcceptModal = ({ onAccept }) => {
  const handleAccept = () => {
    if (onAccept) {
      onAccept();
    }
    document.getElementById("my_modal_order_accept").showModal();
  };

  return (
    <>
      <Button
        className="text-white text-[1.2rem] px-10 py-3"
        onClick={() =>
          document.getElementById("my_modal_order_accept").showModal()
        }
      >
        {" "}
        Accept
      </Button>
      <dialog id="my_modal_order_accept" className="modal">
        <div className="modal-box max-w-[30rem]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn  text-[1.8rem] btn-circle btn-ghost absolute right-4 top-2">
              ✕
            </button>
          </form>
          <div className="flex gap-5 flex-col items-center justify-between overflow-hidden">
            <div className="w-[25rem] flex justify-center items-center ">
              <Image
                src={"/svgs/acceptorder.svg"}
                width={100}
                height={100}
                alt="Add Product IMG"
              />
            </div>
            <div>
              <div className="text-green-500 font-semibold text-[2rem]">
                Accept this order?
              </div>
            </div>
            <div className="flex gap-5 items-center justify-end pb-5">
              <form method="dialog">
                <button className="py-4 px-10 text-[1.2rem] border bg-bg rounded-2xl text-primary">
                  Discard
                </button>
              </form>
              <button
                onClick={handleAccept}
                className="py-4 px-10 text-[1.2rem] border bg-primary text-white rounded-2xl"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default OrderAcceptModal;
