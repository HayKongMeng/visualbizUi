import Image from "next/image";
import Link from "next/link";
import BookmarkButton from "../Buttons/BookmarkButton";
import { getPhoto } from "@/app/utils/util_function";
import { Star } from "lucide-react";

const ShopCard = ({ shop_id, shop, rating }) => {
  return (
    <main className="flex my-card flex-col gap-6 group">
      <section className="inline-block relative w-full rounded-[1.2rem] overflow-hidden ">
        <Link href={"/view/shop/" + shop?.shopId}>
          <Image
            width={1000}
            height={1000}
            alt="product img"
            priority
            src={getPhoto(shop?.shopProfileImg)}
            className="h-[30rem] duration-[3s]"
          />
        </Link>
        {/* <section className="absolute top-[1.5rem] hover:scale-105 duration-300 right-[1.5rem]">
          <BookmarkButton type={"shop"} idx={shop_id} id={shop?.id} />
        </section> */}
      </section>
      <Link
        href={"/view/shop/" + shop?.shopId}
        className="flex justify-between gap-3"
      >
        <p className="text-[1.5rem] font-medium capitalize">{shop?.shopName}</p>
        <p className="flex gap-2 items-center text-mid">
          <Star className="size-[1.6rem] fill-black stroke-none" />
          {rating}
        </p>
      </Link>
    </main>
  );
};

export default ShopCard;
