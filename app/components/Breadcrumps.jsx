"use client";
import Link from "next/link";
import React from "react";
import BackIcon from "../(authentication)/(forgot-password)/components/BackIcon";

import { usePathname } from "next/navigation";
function Breadcrump() {
  const path = usePathname();
  const pathName = path.split("/").filter((path) => path);
  return (
    <>
      <section className="text-near_normal lg:text-normal py-10">
        <ul className="flex gap-5 items-center">
          {pathName.map((path, index) => {
            let href = `/${pathName.slice(0, index + 1).join("/")}`;
            return (
              <React.Fragment key={index}>
                <li key={index}>
                  <Link href={href}>{path.toLocaleUpperCase()}</Link>
                </li>
                <li>
                  <BackIcon />
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Breadcrump;
