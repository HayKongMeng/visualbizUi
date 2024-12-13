import React from "react";
import Button from "@/app/components/Button";
import Image from "next/image";

const OrderDenyModal = ({ onDeny }) => {
  const handleDeny = () => {
    if (onDeny) {
      onDeny();
    }
    
    document.getElementById("my_modal_order_deny").close();
  };

  return (
    <>
      <Button
        className="text-white text-[1.2rem] px-10 py-3 bg-danger"
        onClick={() =>
          document.getElementById("my_modal_order_deny").showModal()
        }
      >
        {" "}
        Deny
      </Button>
      <dialog id="my_modal_order_deny" className="modal">
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
                src={"/svgs/remove.svg"}
                width={1000}
                height={1000}
                alt="Add Product IMG"
              />
            </div>
            <div>
              <div className="text-danger font-semibold text-[2rem]">
                Deny this order?
              </div>
            </div>
            <div className="flex gap-5 items-center justify-end pb-5">
              <form method="dialog">
                <button className="py-4 px-10 text-[1.2rem] border bg-bg rounded-2xl text-primary">
                  Discard
                </button>
              </form>
              <button
                onClick={handleDeny}
                className="py-4 px-10 text-[1.2rem] border bg-primary text-white rounded-2xl"
              >
                Deny
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default OrderDenyModal;
