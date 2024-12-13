import { getOrderHistorySeller } from "@/app/services/order-seller.service";
import HistoryCard from "../../components/History Components/HistoryCard";
import HistoryTopHeader from "../../components/History Components/HistoryTopHeader";
import ImportIcon from "../../components/Icons/ImportIcon";
import OrderIcon from "../../components/Icons/OrderIcon";
import SellerProfileHeader from "../../components/SellerProfileHeader";

export default async function HistoryPage() {
  let historySellers = [];
  try {
    const data = await getOrderHistorySeller();
    historySellers = data.map((item) => ({
      customers_history: {
        name: item.username,
        email: item.email,
        img: item.image,
      },
      order_no_history: item.orderId.toString(),
      amount_history: item.totalAmount.toFixed(2),
      date_history: new Date(item.orderDate).toLocaleDateString(),
      status_history: item.status,
    }));
  } catch (error) {
    console.error("Failed to fetch order history:", error);
  }

  return (
    <section className="h-full w-full pl-5 bg-white text-black overflow-y-hidden rounded-r-xl overflow-x-hidden">
      <section className="flex flex-col gap-5">
        <SellerProfileHeader title={"History"} />
        <div className="flex gap-16 w-full justify-center">
          <HistoryCard
            title={"Order"}
            number={historySellers.length}
            icon={<OrderIcon />}
          />
          <HistoryCard
            title={"Import"}
            number={historySellers.length}
            icon={<ImportIcon />}
          />
        </div>
        <section className="flex flex-col gap-5 h-full w-full">
          <div className="z-0">
            <HistoryTopHeader historySellers={historySellers} />
          </div>
        </section>
      </section>
    </section>
  );
}
