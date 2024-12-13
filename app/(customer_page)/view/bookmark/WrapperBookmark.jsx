"use client";
import BookmarkFilterButton from "@/app/components/Buttons/BookmarkFilterButton";
import { EventCardV3 } from "@/app/components/Cards/FollowingCard";
import ProductCard from "@/app/components/Cards/ProductCard";
import ServiceCard from "@/app/components/Cards/ServiceCard";
import ProductModal from "@/app/components/Modal/ProductModal";
import ServiceModal from "@/app/components/Modal/ServiceModal";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";

const WrapperBookmark = ({
  allServices,
  allEventBookmark,
  getAllProsBookMark,
}) => {
  const [currentSection, setCurrentSection] = useState({ idx: 0 });

  useEffect(() => {
    console.log("Change cate : ", currentSection);
  }, [currentSection]);

  return (
    <>
      <section className="flex gap-[1rem] mt-big_margin ">
        <BookmarkFilterButton setCurrentSection={setCurrentSection} />
      </section>
      {currentSection?.idx == 0 && getAllProsBookMark?.length > 0 && (
        <section className="flex flex-col gap-10 py-10">
          <section className="text-[1.8rem] font-bold">Product</section>
          <main className="grid grid-cols-4 gap-md_gap">
            {getAllProsBookMark?.map((product, index) => (
              <Fragment key={index}>
                <ProductCard
                  isBookmark={true}
                  product={product}
                  idx={index + "bookmarkproduct"}
                />
                <input
                  type="checkbox"
                  id={"my_modal_" + index + "bookmarkproduct"}
                  className="modal-toggle"
                />
                <section className="modal" role="dialog">
                  <section className="modal-box max-w-[100rem]">
                    <ProductModal
                      product={product}
                      idx={index + "bookmarkproduct"}
                      key={index + "bookmarkproduct"}
                    />
                  </section>
                </section>
              </Fragment>
            ))}
          </main>
        </section>
      )}

      {currentSection?.idx == 0 && allServices?.length > 0 && (
        <section className="flex flex-col gap-10 py-10">
          <section className="text-[1.8rem] font-bold">Service</section>
          <main className="grid grid-cols-4 gap-md_gap">
            {allServices.map((service, idx) => (
              <Fragment key={idx}>
                <ServiceCard
                  service={service}
                  idx={idx + "bookmarkservices"}
                  isBookmark={true}
                />
                <input
                  type="checkbox"
                  id={"my_modal_" + (idx + "bookmarkservices")}
                  className="modal-toggle"
                />
                <section className="modal" role="dialog">
                  <section className="modal-box max-w-[100rem]">
                    <ServiceModal
                      service={service}
                      idx={idx + "bookmarkservices"}
                      key={idx + "bookmarkservices"}
                    />
                  </section>
                </section>
              </Fragment>
            ))}
          </main>
        </section>
      )}

      {currentSection?.idx == 0 && allServices?.length > 0 && (
        <section className="flex flex-col gap-10 py-10">
          <section className="text-[1.8rem] font-bold">Events</section>
          <main className="grid grid-cols-4 gap-md_gap">
            {allEventBookmark.map((event) => (
              <Fragment key={event.id}>
                <EventCardV3
                  event_data={event}
                  link={`/view/events/all/${event?.eventDetails?.shop?.shopId}/${event?.eventId}`}
                />
              </Fragment>
            ))}
          </main>
        </section>
      )}

      {(getAllProsBookMark?.length > 0 && currentSection.idx == 0) ||
        currentSection?.idx == 0 ||
        (currentSection?.idx == 1 && (
          <section className="flex flex-col gap-10 py-10">
            {currentSection.idx == 0 && (
              <section className="text-[1.8rem] font-bold">Product</section>
            )}
            <main className="grid grid-cols-4 gap-md_gap">
              {getAllProsBookMark?.map((product, index) => (
                <Fragment key={index}>
                  <ProductCard
                    isBookmark={true}
                    product={product}
                    idx={index + "bookmarkproduct"}
                  />
                  <input
                    type="checkbox"
                    id={"my_modal_" + index + "bookmarkproduct"}
                    className="modal-toggle"
                  />
                  <section className="modal" role="dialog">
                    <section className="modal-box max-w-[100rem]">
                      <ProductModal
                        product={product}
                        idx={index + "bookmarkproduct"}
                        key={index + "bookmarkproduct"}
                      />
                    </section>
                  </section>
                </Fragment>
              ))}
            </main>
          </section>
        ))}

      {(allServices?.length > 0 && currentSection.idx == 0) ||
        (currentSection?.idx == 2 && (
          <section className="flex flex-col gap-10 py-10">
            {currentSection.idx == 0 && (
              <section className="text-[1.8rem] font-bold">Service</section>
            )}
            <main className="grid grid-cols-4 gap-md_gap">
              {allServices.map((service, idx) => (
                <Fragment key={idx}>
                  <ServiceCard
                    service={service}
                    idx={idx + "bookmarkservices"}
                    isBookmark={true}
                  />
                  <input
                    type="checkbox"
                    id={"my_modal_" + (idx + "bookmarkservices")}
                    className="modal-toggle"
                  />
                  <section className="modal" role="dialog">
                    <section className="modal-box max-w-[100rem]">
                      <ServiceModal
                        service={service}
                        idx={idx + "bookmarkservices"}
                        key={idx + "bookmarkservices"}
                      />
                    </section>
                  </section>
                </Fragment>
              ))}
            </main>
          </section>
        ))}

      {(allEventBookmark?.length > 0 && currentSection.idx == 0) ||
        (currentSection?.idx == 3 && (
          <section className="flex flex-col gap-10 py-10">
            {currentSection.idx && (
              <section className="text-[1.8rem] font-bold">Events</section>
            )}
            <main className="grid grid-cols-4 gap-md_gap">
              {allEventBookmark.map((event) => (
                <Fragment key={event.id}>
                  <EventCardV3
                    event_data={event}
                    link={`/view/events/all/${event?.eventDetails?.shop?.shopId}/${event?.eventId}`}
                  />
                </Fragment>
              ))}
            </main>
          </section>
        ))}
    </>
  );
};

export default WrapperBookmark;
