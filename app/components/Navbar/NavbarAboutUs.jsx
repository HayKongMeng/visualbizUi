"use client";
import { aboutUsLinks } from "@/app/data/link_about_us";
import { useStore } from "@/app/store/store";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavbarAboutUs = () => {
  const { aboutUsLink, setLinkAboutUs, setLastTimeClicked } = useStore();

  const getClasses = (currentLink, link) => {
    let classes =
      "group  duration-300 text-normal relative z-10 font-semibol cursor-pointer py-[.5rem] px-[1.2rem] rounded-full ";
    return currentLink == link
      ? classes + " border-transparent  text-white "
      : classes + " border-black/10 ";
  };

  return (
    <nav className="flex p-2 gap-2 left-1/2   -translate-x-1/2 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full fixed bottom-6 z-10">
      {aboutUsLinks.map((link, idx) => (
        <Link
          href={link.link}
          key={idx}
          onClick={() => {
            if (link.title == "Home") return;
            setLinkAboutUs(link.title);
            setLastTimeClicked(Date.now());
          }}
          className={getClasses(link, aboutUsLink)}
        >
          <span
            className={
              link.title === aboutUsLink
                ? " text-black text-near_normal"
                : " text-black text-near_normal"
            }
          >
            {link.title}
          </span>
          {link.title === aboutUsLink && (
            <motion.section
              layoutId="aboutlink"
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
              className={`absolute z-[-1] inset-0 bg-gray-100 rounded-full `}
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarAboutUs;
