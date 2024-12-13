import HistoryCard from "@/app/components/Cards/HistoryCard";
import Container from "@/app/components/Container";
import ActionModal from "@/app/components/Modal/ActionModal";
import { getOrderHistory } from "@/app/services/order.service";
import { getCurrentUser } from "@/app/services/user.service";
import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import React from "react";

const page = async () => {
  const allHistory = await getOrderHistory();
  const user = await getCurrentUser();
  return (
    <Container className={"my-big_margin"}>
      <section id="order" className="flex flex-col gap-sm_gap">
        <h3 className="text-[2.4rem] font-semibold">History</h3>
        <section className="grid grid-cols-[1fr_40rem] gap-big_gap">
          <div className="flex flex-col gap-6">
            {allHistory?.map((order, index) => (
              <React.Fragment key={index}>
                <HistoryCard
                  key={index}
                  data={order}
                  type={"product"}
                  idx={index}
                />
                <input
                  type="checkbox"
                  id={"my_modal_action" + index + "history"}
                  className="modal-toggle"
                />
                <section className="modal" role="dialog">
                  <section className="modal-box max-w-[70rem]">
                    <ActionModal
                      // mixed={true}
                      data={order}
                      idx={index + "history"}
                      history={true}
                      // type="history"
                    />
                  </section>
                </section>
              </React.Fragment>
            ))}
          </div>
          <div className="shadow-sm h-fit align-top hover:shadow-md duration-250 sticky top-6 overflow-hidden rounded-small grid grid-rows-[12rem_1fr]">
            <div className=" relative bg-[url('/images/coverpf.jpeg')] bg-center bg-cover">
              <Image
                width={1000}
                height={1000}
                alt="product img"
                src={getPhoto(user?.profile_img)}
                className="size-[8rem] absolute left-1/2 bottom-0 p-2 bg-white shadow-sm -translate-x-1/2 translate-y-1/2 rounded-full"
              />
            </div>
            <div className="pt-[8rem] pb-10 px-10 flex flex-col gap-6">
              <section>
                <p className="text-mid text-gray-400">Name</p>
                <p className="text-normal font-medium">{user?.username}</p>
              </section>
              <section>
                <p className="text-mid text-gray-400">Email</p>
                <p className="text-normal font-medium">{user?.email}</p>
              </section>
              <section>
                <p className="text-mid text-gray-400">Phone Number</p>
                <p className="text-normal font-medium">0987654321</p>
              </section>
              <section>
                <p className="text-mid text-gray-400">Billing Address</p>
                <p className="text-normal font-medium">{user?.address}</p>
              </section>
              <section>
                <p className="text-mid text-gray-400">Payment</p>
                <p className="text-normal font-medium">We Bill</p>
              </section>
            </div>
          </div>
        </section>
      </section>
    </Container>
  );
};

export default page;
