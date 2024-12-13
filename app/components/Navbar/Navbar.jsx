"use client";
import { useStickyNavbar } from "@/app/hooks/hooks";

const Navbar = ({ children }) => {
  const [fixed] = useStickyNavbar();

  return (
    <>
        <header
      id="page"
      className={`shadow-sm bg-white sticky duration-400 ${
        fixed ? "top-[-100%]" : "top-0"
      } bg-white z-[99] py-sm_paddding`}
    >
      {children}
    </header>
    </>

  );
};

export default Navbar;
