import BackIcon from "@/app/(authentication)/(forgot-password)/components/BackIcon";
import Image from "next/image";
import ProfileHeaderSeller from "../../../components/ProfileHeaderSeller";
import ViewBookmarkButton from "@/app/components/Buttons/ViewBookmarkButton";
import { eventDatas } from "../../../eventData";
import Link from "next/link";
import Comment from "../../../components/Comment";

function EventDetailPage({ params }) {
  const id = params.id;
  const event = eventDatas[id - 1];
  return (
    <section className="w-container m-auto py-5  flex justify-center flex-col">
      <section className=" flex gap-4 py-10">
        <BackIcon />
        <Link className="font-bold" href={"/view/events/all-service-event"}>
          Back
        </Link>
      </section>
      <section className="flex gap-10 flex-col lg:flex-row">
        <section className="lg:w-[100rem]">
          <Image
            src="/images/event-detail-img.png"
            // src={event.profile_img}
            alt="EventDetail"
            width={500}
            height={500}
          />
        </section>
        <section className="flex gap-5 flex-col">
          <section className="flex justify-between items-center">
            <ProfileHeaderSeller event={event} />
            <ViewBookmarkButton />
          </section>
          <section className="font-semibold text-[1.8rem]">
            {event.title}
          </section>
          <section>{event.description}</section>
          <Comment event={event} />
        </section>
      </section>
    </section>
  );
}

export default EventDetailPage;
