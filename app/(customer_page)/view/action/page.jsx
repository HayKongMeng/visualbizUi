import ActionCard from "@/app/components/Cards/ActionCard";
import Container from "@/app/components/Container";
import ActionModal from "@/app/components/Modal/ActionModal";
import { getAllBooking } from "@/app/services/book.service";
import { getOrderAction } from "@/app/services/order.service";
import { getCurrentUser } from "@/app/services/user.service";
import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import React from "react";

const page = async () => {
  const orderAction = await getOrderAction();
  const allBooking = await getAllBooking();
  const currentUser = await getCurrentUser();
  return (
    <Container className={"my-big_margin"}>
      <h3 className="text-semi_header font-semibold my-sm_margin">Order</h3>
      <main className="grid grid-cols-[1fr_40rem] gap-sm_gap">
        <section>
          <section id="order" className="flex flex-col gap-sm_gap">
            <section className="">
              <div className="flex flex-col gap-6">
                {orderAction?.map((order, index) => (
                  <React.Fragment key={index}>
                    <ActionCard
                      key={index}
                      data={order}
                      type={"product"}
                      idx={index}
                    />
                    <input
                      type="checkbox"
                      id={"my_modal_action" + index}
                      className="modal-toggle"
                    />
                    <section className="modal" role="dialog">
                      <section className="modal-box max-w-[70rem]">
                        <ActionModal data={order} idx={index} type="product" />
                      </section>
                    </section>
                  </React.Fragment>
                ))}
              </div>
            </section>
          </section>
          <section
            id="booking"
            className="flex flex-col gap-sm_gap mt-big_margin"
          >
            <h3 className="text-semi_header font-semibold">Booking</h3>
            <section className="">
              <div className="flex flex-col gap-6">
                {allBooking?.map((book, index) => (
                  <React.Fragment key={index}>
                    <ActionCard
                      key={index}
                      data={book}
                      type={"book"}
                      idx={index + "booking"}
                    />
                    <input
                      type="checkbox"
                      id={"my_modal_action" + index + "booking"}
                      className="modal-toggle"
                    />
                    <section className="modal" role="dialog">
                      <section className="modal-box max-w-[70rem]">
                        <ActionModal
                          data={book}
                          idx={index + "booking"}
                          history={false}
                          type="book"
                        />
                      </section>
                    </section>
                  </React.Fragment>
                ))}
              </div>
            </section>
          </section>
        </section>
        <div className="shadow-sm h-fit align-top hover:shadow-md duration-250 sticky top-6 overflow-hidden rounded-small grid grid-rows-[12rem_1fr]">
          <div className=" relative bg-[url('/images/coverpf.jpeg')] bg-center bg-cover">
            <Image
              width={1000}
              height={1000}
              alt="product img"
              src={getPhoto(currentUser?.profile_img)}
              className="size-[8rem] absolute left-1/2 bottom-0 p-2 bg-white shadow-sm -translate-x-1/2 translate-y-1/2 rounded-full"
            />
          </div>
          <div className="pt-[8rem] pb-10 px-10 flex flex-col gap-6">
            <section>
              <p className="text-mid text-gray-400">Name</p>
              <p className="text-normal font-medium">{currentUser?.username}</p>
            </section>
            <section>
              <p className="text-mid text-gray-400">Email</p>
              <p className="text-normal font-medium">{currentUser?.email}</p>
            </section>
            <section>
              <p className="text-mid text-gray-400">Phone Number</p>
              <p className="text-normal font-medium">0987654321</p>
            </section>
            <section>
              <p className="text-mid text-gray-400">Billing Address</p>
              <p className="text-normal font-medium">{currentUser?.address}</p>
            </section>
            <section>
              <p className="text-mid text-gray-400">Payment</p>
              <p className="text-normal font-medium">WeBill365</p>
            </section>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default page;
