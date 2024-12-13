import ProfileHeaderSeller from "@/app/(customer_page)/view/(events)/components/ProfileHeaderSeller";
import Image from "next/image";
import BookmarkIcon from "../Icons/BookmarkIcon";
import CommentIcon from "@/app/(customer_page)/view/(events)/components/CommentIcon";
import SeeMoreBTN from "../Buttons/SeeMoreButton";
import Link from "next/link";

function EventCard({
  event,
  viewFor = "shop" || "service",
  shop_or_service_id,
  inViewAll = false,
}) {
  const img = "/"+ event.eventImage;
  console.log("imageee",img)
  const pathLink =
    viewFor == "shop"
      ? `/view/shop/${shop_or_service_id}/${event.id}`
      : viewFor == "service"
      ? `/view/service/${shop_or_service_id}/${event.id}`
      : `/view/events/${inViewAll ? "all-product-event" : ""}/${event.id}`;
  return (
    <section className="px-5 py-8 border rounded-xl">
      <section className="flex flex-col gap-5">
        <section className="flex items-center justify-between">
          <ProfileHeaderSeller event={event} />
          <BookmarkIcon />
        </section>
        <Link href={pathLink}>
          <section className="flex flex-col gap-4">
            <section className="font-semibold text-normal">
              {event.eventTitle}
            </section>
            <section className="line-clamp-3 text-mid">
              {event.eventDescription}
            </section>
            <Image className="h-[25rem]"
              src={img}
              width={800}
              height={800}
              alt="Event Card"
            />
            <section className="flex items-center justify-between">
              <CommentIcon event={event} />
              <SeeMoreBTN />
            </section>
          </section>
        </Link>
      </section>
    </section>
  );
}

export default EventCard;
