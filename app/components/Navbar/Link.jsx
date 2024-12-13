"use client";
import { navbar_links } from "@/app/data/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";

const MyLinks = () => {
  const [currentPath, setPath] = useState(0);
  const path = usePathname();
  useEffect(() => {
    if (path.endsWith("/")) setPath(0);
    else if (path.includes("/view/events")) setPath(1);
    else if (path.includes("/view/action")) setPath(2);
    else if (path.includes("/history")) setPath(-1);
    else if (path.includes("/about")) setPath(3);
    else setPath(-1);
  }, [currentPath, path]);

  let classes = "links relative text-normal  ";
  return (
    <>
      {navbar_links.map((nav, idx) => (
        <Link
          key={idx}
          href={nav.link}
          className={currentPath == idx ? classes + " active " : classes}
        >
          {nav.title}
        </Link>
      ))}
    </>
  );
};

export default MyLinks;
