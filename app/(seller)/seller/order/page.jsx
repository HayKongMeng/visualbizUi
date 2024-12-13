import React, { Fragment } from "react";
import OrderCard from "../../components/Order Components/OrderCard";
import SellerProfileHeader from "../../components/SellerProfileHeader";
import OrderFilter from "../../components/Order Components/OrderFilter";
import ActionModal from "@/app/components/Modal/ActionModal";
import { getAllOrderSeller } from "@/app/services/order-seller.service";
import { acceptOrder } from "@/app/services/order.service";

const OrderPage = async ({ params: shop_id, orderId }) => {
  const orders = await getAllOrderSeller();
  // console.log("Orders:  ", getAllOrderSeller)
  const currentShopOrder = orders.find(
    (order) =>
      order?.shop?.shopId === parseInt(shop_id) &&
      order?.shop?.shopType?.shopType == "seller"
  );
  console.log("orders", orders);

  // const OrderAccept = await acceptOrder(orderId);
  return (
    <div className="pl-5 h-full">
      <div className="h-full flex flex-col gap-5">
        <div>
          <SellerProfileHeader title={"Order Management"} />
        </div>
        <div className="my-5">
          <OrderFilter />
        </div>
        {orders.length === 0 ? (
          <div className="flex justify-center items-center h-full font-bold text-4xl">No orders at the moment 😅</div>
        ): (
          <div className="flex flex-col gap-4 overflow-y-auto h-full rounded-xl">
          {orders.map((order) => (
            <Fragment key={order.id}>
              <OrderCard order={order} idx={order.id + "sellerpage"} />
              <input
                type="checkbox"
                id={"my_modal_action" + order.id + "sellerpage"}
                className="modal-toggle"
              />
              <section className="modal" role="dialog">
                <section className="modal-box max-w-[70rem]">
                  <ActionModal
                    data={order}
                    idx={order.id + "sellerpage"}
                    history={false}
                    type="seller"
                  />
                </section>
              </section>
            </Fragment>
          ))}
        </div>
        )}
       
      </div>
    </div>
  );
};

export default OrderPage;
