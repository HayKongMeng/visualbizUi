import Image from "next/image";
import React from "react";
import BookmarkButton from "../Buttons/BookmarkButton";
import AddToCartButton from "../Buttons/AddToCartButton";
import { getPhoto } from "@/app/utils/util_function";
import { bookmarkPro } from "@/app/action/bookmarkAction";

const ProductCard = ({ idx, product, isBookmark = false }) => {
  return (
    <main className="my-card flex flex-col gap-6  group rounded-small  duration-300 group">
      <section className="product-img relative overflow-hidden">
        <label
          htmlFor={"my_modal_" + idx}
          className="inline-block overflow-hidden w-full rounded-[1.2rem]"
        >
          <Image
            width={1000}
            height={1000}
            priority
            alt={product?.productName}
            src={getPhoto(
              product?.productImg || product?.productDetails?.productImg
            )}
            className="h-[30rem] cursor-pointer w-full  duration-[3s]"
          />
        </label>
        <section className="absolute hover:scale-105 top-[1.5rem] duration-300  right-[1.5rem]">
          <BookmarkButton
            type={"shop"}
            idx={idx}
            id={product?.productId}
            fn={bookmarkPro}
            isBookmark={isBookmark}
          />
        </section>
      </section>
      <section className="product-des">
        <section className=" flex justify-between">
          <label htmlFor={`my_modal_${idx}`} className="flex flex-col gap-2">
            <p className="text-[1.5rem] cursor-pointer font-medium capitalize">
              {product?.productName || product?.productDetails?.productName}
            </p>
            <p className="text-normal cursor-pointer font-medium text-danger">
              $ {product?.unitPrice || product?.productDetails?.unitPrice}
            </p>
          </label>
          {/* <section>
            <AddToCartButton id={product?.productId} idx={idx} />
          </section> */}
        </section>
      </section>
    </main>
  );
};

export default ProductCard;
