import Image from "next/image";
import React from "react";
import { getUserById } from "../services/user.service";
import { getPhoto } from "../utils/util_function";

const FeedBack = async ({ type, customer }) => {
  const user = await getUserById(customer?.customerId);
  return (
    <main className="flex flex-col  gap-[2.2rem]">
      <section className="flex justify-between items-end  gap-[2.2rem]">
        <section className="flex gap-[2.2rem]">
          <Image
            width={1000}
            height={1000}
            alt="product img"
            src={getPhoto(user?.profile_img)}
            className="size-[5rem] rounded-full"
          />
          <section className="flex flex-col justify-between">
            <p className="text-normal font-medium">{user?.username}</p>
            <span className="flex gap-1">
              {Array.from({ length: 5 }).map((star, idx) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`ionicon size-[1.6rem] ${
                    idx + 1 <= customer?.rate
                      ? " fill-secondary "
                      : "fill-gray-200 stroke-none"
                  } `}
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                    // fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                </svg>
              ))}
            </span>
          </section>
        </section>
        <section>
          <p className="text-mid text-gray-400">{customer?.date}</p>
        </section>
      </section>
      <section>
        <p className="text-mid line-clamp-3">{customer?.feedback}</p>
      </section>
    </main>
  );
};

export default FeedBack;
