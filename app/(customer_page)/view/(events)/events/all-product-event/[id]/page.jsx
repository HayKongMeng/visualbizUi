import BackIcon from "@/app/(authentication)/(forgot-password)/components/BackIcon";
import Image from "next/image";
import Link from "next/link";
import ProfileHeaderSeller from "../../../components/ProfileHeaderSeller";
import ViewBookmarkButton from "@/app/components/Buttons/ViewBookmarkButton";
import Comment from "../../../components/Comment";
import { eventDatas } from "../../../eventData";

function EventDetailPage({ params: { id } }) {
  const event = eventDatas[id - 1];
  return (
    <section className="w-container m-auto py-5  flex justify-center flex-col">
      <Link
        className="font-bold flex gap-3 items-center my-10 text-normal"
        href={"/view/events"}
      >
        <BackIcon />
        Back
      </Link>
      <section className="flex gap-10 flex-col lg:flex-row">
        <section className="lg:w-[100rem]">
          <Image
            src="/images/event-detail-img.png"
            // src={event.profile_img}
            alt="EventDetail"
            width={500}
            height={500}
            className="h-[50rem]"
          />
        </section>
        <section className="flex gap-5 flex-col">
          <section className="flex justify-between items-center">
            <ProfileHeaderSeller event={event} />
            <ViewBookmarkButton />
          </section>
          <p className="font-semibold text-semi_header">{event.title}</p>
          <p className="text-mid">{event.description}</p>
          <Comment event={event} />
        </section>
      </section>
    </section>
  );
}

export default EventDetailPage;
