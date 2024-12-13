"use client";
import Image from "next/image";
import React from "react";
import StoreToCartButton from "../Buttons/StoreToCartButton";
import { getPhoto, setToast } from "@/app/utils/util_function";
import { useCartStore } from "@/app/store/store_product";
import { useState } from "react";
import { useOrderCountStore } from "@/app/store/orderCount";
import { postOrderPro } from "@/app/action/orderAction";
import { useLocationStore } from "@/app/store/locationStore";

const ProductModal = ({ product, idx }) => {
  const [quantity, setQuantity] = useState(1);
  const { current_user_location } = useLocationStore();

  const [count, setCount] = useState(0);
  const handleClick = () => {
    if (count <= 0) {
      postOrderPro({
        orderAddress: current_user_location,
        shop: product?.shop,
        qty: [quantity],
        productId: [product?.productId],
      });
      // storeToCart(product);
      // setCount(count + 1);
      // setOrderCount();
      setToast("success", "🤩 Product has been ordered");
    } else {
      setToast("error", "🫣 Product is already ordered");
    }
  };
  return (
    <main className="grid grid-cols-2 p-6 h-[60rem]   gap-[3.2rem]">
      <section className="modal-action absolute right-[1rem] top-[-.5rem]">
        <label htmlFor={"my_modal_" + idx} className="cursor-pointer bg-primar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon size-[3rem] p-2 hover:duration-300 hover:bg-primary rounded-full hover:stroke-white stroke-black"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              //   stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </label>
      </section>
      <section className="gri h-full grid-rows- gap-[2rem] overflow-hidden">
        <div className="h-full overflow-hidden">
          <Image
            width={1000}
            height={1000}
            alt={product?.productName}
            priority
            src={`${getPhoto(
              product?.productImg || product?.productDetails?.productImg
            )}`}
            className="!h-full w-full rounded-small  duration-300"
          />
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <h3 className="text-big_header">
          {product?.productName || product?.productDetails?.productName}
        </h3>

        <section>
          <p className="text-normal text-secondary font-bold">
            $ {product?.unitPrice || product?.productDetails?.unitPrice}
          </p>
        </section>
        <section className="flex flex-col gap-[2rem]">
          <section className="grid grid-cols-[10rem_1fr] items-end gap-[3rem]">
            <p className="text-mid font-medium">Category</p>
            <p className="text-mid capitalize">
              {product?.category?.categoryName ||
                product?.productDetails?.category?.categoryName}
            </p>
          </section>

          {product?.discount && (
            <section className="grid grid-cols-[10rem_1fr] items-end gap-[3rem]">
              <p className="text-mid font-medium">Discount</p>
              <p className="text-mid">{product?.discount}%</p>
            </section>
          )}
          <section className="grid grid-cols-[10rem_1fr] items-start gap-[3rem]">
            <p className="text-mid font-medium">Description</p>
            <p className="text-mid">
              {product.productDescription ||
                product?.productDetails?.productDescription}
            </p>
          </section>
        </section>
        <section className=" mt-auto">
          <section className="flex justify-between items-center w-full">
            {/* <ButtonIncreaseQuantity /> */}
            <section className="flex gap-[2rem] items-center bg-bg py-2 px-6 rounded-small">
              <button
                onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                className={`text-[2rem] ${
                  quantity <= 0 ? "text-gray-400" : ""
                }`}
              >
                -
              </button>
              <p className="size-[3rem] text-secondary font-bold p-2 flex items-center justify-center border rounded-md text-normal">
                {quantity}
              </p>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-[2rem]"
              >
                +
              </button>
            </section>
            <section className="flex gap-4">
              <label
                onClick={handleClick}
                htmlFor={"my_modal_" + idx}
                className=" bg-primary cursor-pointer small-btn rounded-small text-white"
              >
                Order Now
              </label>
              <StoreToCartButton
                data={{ ...product, quantity, type: "product" }}
                type="product"
              />
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default ProductModal;
