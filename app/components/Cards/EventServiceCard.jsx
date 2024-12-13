import ProfileHeaderSeller from "@/app/(customer_page)/view/(events)/components/ProfileHeaderSeller";
import BookmarkIcon from "../Icons/BookmarkIcon";
import Image from "next/image";
import CommentIcon from "@/app/(customer_page)/view/(events)/components/CommentIcon";
import SeeMoreBTN from "../Buttons/SeeMoreButton";
import Link from "next/link";

function EventServiceCard({ event }) {
  return (
    <section className="px-5 py-8 border rounded-xl">
      {/* <section className="px-5 py-8 border rounded-xl "> */}
      <section className="flex flex-col gap-5">
        <section className="flex items-center justify-between">
          <ProfileHeaderSeller event={event} />
          <BookmarkIcon />
        </section>
        <Link href={`/view/events/all-service-event/${event.id}`}>
          <section className="flex flex-col gap-4">
            <Image
            className="h-[25rem]"
              src={event.profile_img}
              width={800}
              height={0}
              alt="Event Card"
            />
            <section className="font-semibold text-[1.8rem]">
              {event.title}
            </section>
            <section className="line-clamp-3 text-near_normal">
              {event.description}
            </section>

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

export default EventServiceCard;
