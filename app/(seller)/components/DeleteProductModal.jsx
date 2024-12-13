"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import CloseIcon from "./Icons/CloseIcon";
import { deleteProductAction } from "@/app/action/productAction";

function DeleteProductModal({ data }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Log the data to see its structure
  console.log("DeleteProductModal data:", data?.productId);
  console.log("Product ID:", data?.productId);

  return (
    <>
      <section onClick={onOpen} className="text-[1.2rem] py-3">
        Delete
      </section>
      <Modal
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        hideCloseButton
        classNames={{ base: "w-[50rem]" }}
      >
        <ModalContent className="text-normal rounded-3xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex text-normal justify-end">
                <section onClick={onClose}>
                  <CloseIcon />
                </section>
              </ModalHeader>
              <ModalBody>
                <section className="flex gap-5 p-5 flex-col items-center justify-between h-full">
                  <section className="w-[35rem] flex justify-center items-center">
                    <Image
                      src={"/svgs/remove.svg"}
                      width={1000}
                      height={1000}
                      alt="Add Product IMG"
                    />
                  </section>
                  <section>
                    <section className="text-danger font-semibold text-[2rem]">
                      Do you want to delete this product?
                    </section>
                  </section>
                  <section className="flex gap-5 items-center justify-end pb-10">
                    <button
                      onClick={onClose}
                      className="py-4 px-10 text-[1.2rem] border bg-bg rounded-2xl text-primary"
                    >
                      Discard
                    </button>

                    <button
                      onClick={async () => {
                        await deleteProductAction(data?.productId);
                        onClose();
                      }}
                      className="py-4 px-10 text-[1.2rem] border bg-danger text-white rounded-2xl"
                    >
                      Delete
                    </button>
                  </section>
                </section>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteProductModal;
