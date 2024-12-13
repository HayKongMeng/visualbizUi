import ProductCard from "@/app/components/Cards/ProductCard";
import Container from "@/app/components/Container";
import FeedBack from "@/app/components/FeedBack";
import ProductModal from "@/app/components/Modal/ProductModal";
import FeedBackRating from "@/app/components/ViewRating/FeedBackRating";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { customerFeedbackList } from "@/app/data/dummy_feedback";
import FeedbackModal from "@/app/components/Modal/FeedbackModal";
import { getAllProductsByShopId } from "@/app/services/product.service";
import { getShopById } from "@/app/services/shop.service";
import {
  filterDataByCate,
  getAllCategories,
  getPhoto,
} from "@/app/utils/util_function";
import { notFound } from "next/navigation";
import { getAllEvent, getEventByShopId } from "@/app/services/event.service";
import { EventCardV3 } from "@/app/components/Cards/FollowingCard";
import {
  getAvgRatingByShopId,
  getRateFeedbackByShopId,
} from "@/app/services/rate.service";
import { getPromotionByShopId } from "@/app/services/promotion.service";
import PromotionCard from "@/app/components/Cards/PromotionCard";

const page = async ({ params: { shop_id } }) => {
  if (shop_id == "undefined" || isNaN(shop_id)) notFound();
  const allProductsInShop = await getAllProductsByShopId(shop_id);
  const currentShop = await getShopById(shop_id);
  if (!currentShop) notFound();
  const allEventsInShop = await getEventByShopId(shop_id);

  const allFeedbacks = await getRateFeedbackByShopId(shop_id);

  const rating = await getAvgRatingByShopId(shop_id);

  const allPrmotions = await getPromotionByShopId(shop_id, 1, 999);
  console.log("all promotions ", allPrmotions);

  return (
    <Container className={" my-md_margin"}>
      <Link
        href={"/"}
        className="text-normal font-medium flex items-center gap-3 my-big_margin"
      >
        <span>Home</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon size-[2rem]"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M184 112l144 144-144 144"
          />
        </svg>
        <span>Shop</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon size-[2rem]"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M184 112l144 144-144 144"
          />
        </svg>
        <span className="capitalize">{currentShop?.shopName}</span>
      </Link>
      <section className="shop-pf flex justify-between gap-[10rem] my-md_margin">
        <main className="profile w-[40rem] flex flex-col gap-sm_gap">
          <Image
            width={1000}
            height={1000}
            alt="product img"
            src={getPhoto(currentShop?.shopProfileImg)}
            className="size-[15rem] rounded-full"
          />
          <section>
            <h3 className="text-big_header font-semibold capitalize">
              {currentShop?.shopName}
            </h3>
            <p className="text-mid">{currentShop?.description}</p>
          </section>
          <section className="flex flex-col gap-3">
            <section className="flex gap-3">
              {rating ? (
                <p className="flex gap-2 items-center text-mid">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon size-[1.6rem] fill-secondary stroke-none"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                  </svg>
                  {rating}
                </p>
              ) : (
                <p className="flex gap-2 items-center text-mid">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon size-[1.6rem] fill-secondary stroke-none"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                  </svg>
                  No Rating
                </p>
              )}
            </section>
            <section className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon size-[1.8rem]"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
                <circle
                  cx="256"
                  cy="192"
                  r="48"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
              </svg>
              <p className="text-mid capitalize">
                {currentShop?.user?.address}
              </p>
            </section>
          </section>
        </main>
        <main>
          {currentShop?.shopProfileCover && (
            <section className="overflow-hidden rounded-medium inline-block group">
              <Image
                width={1000}
                height={1000}
                alt={"cover shop"}
                src={getPhoto(currentShop?.shopProfileCover)}
                className="h-[47rem] w-[70rem] duration-[2s] group-hover:scale-[1.1]"
              />
            </section>
          )}
        </main>
      </section>

      {allEventsInShop?.length > 0 && (
        <section className="shop-cate my-big_margin">
          <section className="flex flex-col gap-sm_gap">
            <p className="text-normal_header font-semibold">Events</p>
            <main className="grid grid-cols-4 gap-md_gap">
              {allEventsInShop?.map((event, idx) => (
                <EventCardV3
                  key={idx}
                  event_data={event}
                  link={`/view/shop/${shop_id}/${event?.eventId}`}
                />
              ))}
            </main>
          </section>
        </section>
      )}

      {allPrmotions?.length > 0 && (
        <section className="shop-cate my-big_margin">
          <section className="flex flex-col gap-sm_gap">
            <p className="text-normal_header font-semibold">Promotion</p>
            <main className="grid grid-cols-4 gap-md_gap">
              {allPrmotions?.map((promo, idx) => (
                <PromotionCard key={idx} inShop={true} discount={promo} />
              ))}
            </main>
          </section>
        </section>
      )}

      {/* <section className="shop-cate my-big_margin">
        {getAllCategories(allProductsInShop).map((cate, idx) =>

          filterDataByCate(allProductsInShop, cate).map((product, index) => (
            <section
              key={index}
              className="flex flex-col gap-sm_gap my-md_margin"
            >
              <p className="text-normal_header font-semibold capitalize">
                {cate}
              </p>
              <main className="grid grid-cols-4 gap-md_gap">
                <ProductCard
                  product={product}
                  idx={index + idx + "shop"}
                  key={index}
                />
                <input
                  type="checkbox"
                  id={"my_modal_" + (index + idx + "shop")}
                  className="modal-toggle"
                />
                <section className="modal" role="dialog">
                  <section className="modal-box max-w-[100rem]">
                    <ProductModal
                      product={product}
                      idx={index + idx + "shop"}
                      key={index}
                    />
                  </section>
                </section>
              </main>
            </section>
          ))
        )}
      </section> */}

      <section className="shop-cate my-big_margin">
        {getAllCategories(allProductsInShop).map((cate, idx) => (
          <section key={idx} className="flex flex-col gap-sm_gap my-big_margin">
            <p className="text-normal_header font-semibold capitalize">
              {cate}
            </p>
            <main className="grid grid-cols-4 gap-md_gap">
              {filterDataByCate(allProductsInShop, cate).map(
                (product, index) => (
                  <React.Fragment key={idx + index + product?.productId}>
                    <ProductCard
                      product={product}
                      idx={idx + index + product?.productId + "shop"}
                      key={idx + index}
                    />
                    <input
                      type="checkbox"
                      id={
                        "my_modal_" +
                        (idx + index + product?.productId + "shop")
                      }
                      className="modal-toggle"
                    />
                    <section className="modal" role="dialog">
                      <section className="modal-box max-w-[100rem]">
                        <ProductModal
                          product={{ ...product, shop: parseInt(shop_id) }}
                          idx={idx + index + product?.productId + "shop"}
                          key={idx + index + product?.productId}
                        />
                      </section>
                    </section>
                  </React.Fragment>
                )
              )}
            </main>
          </section>
        ))}
      </section>

      {
        <section className="customer-feedback flex justify-between my-[12rem]">
          <section className="w-[40rem]">
            <p className="text-semi_header font-semibold mb-md_margin">
              Customer feedback
            </p>
            <section className="customer-detail-feedback flex flex-col gap-md_gap">
              {allFeedbacks?.length > 0 &&
                allFeedbacks.map((feedback, idx) => (
                  <FeedBack type={""} key={idx} customer={feedback} />
                ))}
            </section>
            {allFeedbacks?.length > 0 && (
              <label
                htmlFor={"my_modal_see_feedback" + shop_id + "shop"}
                className="bg-primary rounded-small my-md_margin cursor-pointer py-[.8rem] px-[1.6rem] inline-block w-full"
              >
                <p className="w-full text-mid text-white font-medium flex gap-4 items-center justify-center">
                  <span className="text-white">See More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon stroke-white size-[2rem]"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      // stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M262.62 336L342 256l-79.38-80M330.97 256H170"
                    />
                    <path
                      d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z"
                      fill="none"
                      // stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    />
                  </svg>
                </p>
              </label>
            )}
            <input
              type="checkbox"
              id={"my_modal_see_feedback" + shop_id + "shop"}
              className="modal-toggle"
            />
            <section className="modal" role="dialog">
              <section className="modal-box max-w-[70rem] no-scrollbar relative">
                <FeedbackModal
                  type={"shop"}
                  idx={shop_id}
                  allFeedaback={customerFeedbackList}
                />
              </section>
            </section>
          </section>
          <section className="w-[50rem] h-[30rem] no-scrollbar">
            <FeedBackRating rating={rating} idx={shop_id} type="shop" />
          </section>
        </section>
      }
    </Container>
  );
};

export default page;
