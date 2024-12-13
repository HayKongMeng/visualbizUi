"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import CloseIcon from "../Icons/CloseIcon"; 
import { deletePromotionAction } from "@/app/action/promotionAction";

function DeletePromotionModal({data}) {
  console.log(data)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div onClick={onOpen} className=" text-[1.2rem] py-3">
        {" "}
        Delete
      </div>
      <Modal
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        hideCloseButton
        classNames={{base: "w-[50rem]"}}
        // scrollBehavior="inside"
      >
        <ModalContent className="text-normal rounded-3xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex text-normal justify-end">
                <div onClick={onClose}>
                  <CloseIcon />
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="flex  gap-5 p-5  flex-col  items-center justify-between  h-full">
                  <div className="w-[35rem] flex justify-center items-center ">
                    <Image
                      src={"/svgs/deleteimg.svg"}
                      width={1000}
                      height={1000}
                      alt="DELETE IMG"
                    />
                  </div>
                  <div>
                    <div className="text-danger font-semibold text-[2rem]">
                      Do you want to delete this promotion?
                    </div>
                  </div>
                  <div className="flex gap-5 items-center justify-end pb-10">
                    <button
                      onClick={onClose}
                      className="py-4 px-10 text-[1.2rem] border bg-bg rounded-2xl text-primary"
                    >
                      Discard
                    </button>

                    <button onClick={async()=>{
                      await deletePromotionAction(data?.promotionId);
                      onClose();
                    }}
                    className="py-4 px-10 text-[1.2rem] border bg-danger text-white rounded-2xl">
                      Delete
                    </button>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeletePromotionModal;
