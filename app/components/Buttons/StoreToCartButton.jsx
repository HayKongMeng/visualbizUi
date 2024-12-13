"use client";

import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useOrderCountStore } from "@/app/store/orderCount";
import { setToast } from "@/app/utils/util_function";
import { useCartStore } from "@/app/store/store_product";
import { useEffect } from "react";

const StoreToCartButton = ({ type = "product" || "service", data = {} }) => {
  const [count, setCount] = useState(0);
  const { setOrderCount } = useOrderCountStore();
  const { cartList, storeToCart } = useCartStore();

  useEffect(() => {
    console.log("Adding new product store : ", cartList);
  }, [cartList]);

  const handleClick = () => {
    if (count <= 0) {
      setOrderCount();
      storeToCart(data);
      setCount(count + 1);
      setToast(
        "success",
        type == "product"
          ? "🤩 Product has been add to cart"
          : "🤩 Service has been add to cart"
      );
    } else {
      setToast(
        "error",
        type == "service"
          ? "🫣 Service is already add to cart"
          : "🫣 Product is already add to cart"
      );
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-primary small-btn rounded-small text-white"
      >
        <svg
          id="svg-add-to-cart"
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon stroke-white fill-white size-[2rem]"
          viewBox="0 0 512 512"
        >
          <circle
            cx="176"
            cy="416"
            r="16"
            fill="#fff"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <circle
            cx="400"
            cy="416"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M48 80h64l48 272h256"
          />
          <path
            d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
      </button>
    </>
  );
};

export default StoreToCartButton;
