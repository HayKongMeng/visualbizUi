import Image from "next/image";
import React from "react";
import BookmarkButton from "../Buttons/BookmarkButton";
import { getPhoto } from "@/app/utils/util_function";
import { bookmarkService } from "@/app/action/bookmarkAction";

/**
 * card for every service
 * @param {each_service_id}
 */

const ServiceCard = ({ service_id, idx, service, isBookmark }) => {
  return (
    <main className="my-card cursor-pointer flex flex-col gap-6  group rounded-small  duration-300 group">
      <section className="product-img relative overflow-hidden">
        <label
          htmlFor={`my_modal_${idx}`}
          className="inline-block overflow-hidden w-full rounded-[1.2rem]"
        >
          <Image
            width={1000}
            height={1000}
            priority
            alt="product img"
            src={getPhoto(
              service?.serviceImage || service?.serviceDetails?.serviceImg
            )}
            className="h-[30rem] cursor-pointer w-full rounded-[.8rem]  duration-[3s]"
          />
          <section className="absolute hover:scale-105 top-[1.5rem] duration-300 right-[1.5rem]">
            {/* <BookmarkButton id={service?.serviceId} idx={service?.serviceId} /> */}
            <BookmarkButton
              isBookmark={isBookmark}
              fn={bookmarkService}
              id={parseInt(service?.serviceId)}
            />
          </section>
        </label>
      </section>
      <section className="product-des">
        <section className=" flex justify-between">
          <label htmlFor={`my_modal_${idx}`}>
            <p className="text-[1.5rem] cursor-pointer font-medium capitalize">
              {service?.serviceName || service?.serviceDetails?.serviceName}
            </p>
            <p className="text-[1.6rem] cursor-pointer font-medium text-danger">
              $ {service?.servicePrice || service?.serviceDetails?.servicePrice}
            </p>
          </label>
          {/* <section>
            <AddToCartButton idx={idx} id={service?.id} />
          </section> */}
        </section>
      </section>
    </main>
  );
};

export default ServiceCard;
