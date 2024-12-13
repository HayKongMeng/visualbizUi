import { ShoppingBag } from "lucide-react";
import { PackageSearch } from "lucide-react";
import { LogIn } from "lucide-react";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className=" bg-white fixed top-0 py-[2rem] pl-[2rem] h-full flex flex-col justify-between">
      {/* top side  */}
      <div>
        {/* profile  */}
        <div className="">
          <div className=" flex gap-6 items-center justify-center">
            <Link href={"/"}>
              <Image
                src={"/our-logo.PNG"}
                width={1000}
                height={1000}
                alt="profile"
                className="object-contain w-[14rem]"
              />
            </Link>
          </div>
        </div>
        {/* menu  */}
        <div className="py-10 flex flex-col gap-4">
          <h3 className=" text-mid text-slate-500">Menu</h3>
          <div className="flex flex-col gap-4">
            <Link
              href={"/test"}
              className=" rounded-[.8rem] group hover:duration-300  flex gap-6 items-center"
            >
              <span>
                <Home className="stroke-[2] group-hover:stroke-slate-500 size-[1.8rem]" />
              </span>
              <span className="text-normal group-hover:text-slate-500 font-medium">
                Dashboard
              </span>
            </Link>
            <Link
              href={"/test/view/product"}
              className=" py-4 rounded-[.8rem] group hover:duration-300 flex gap-6 items-center"
            >
              <span>
                <PackageSearch className="stroke-[2] group-hover:stroke-slate-500 size-[1.8rem]" />
              </span>
              <span className="text-normal font-medium group-hover:text-slate-500">
                Product
              </span>
            </Link>
            <Link
              href={"#"}
              className=" py-4 rounded-[.8rem] group hover:duration-300 flex gap-6 items-center"
            >
              <span>
                <ShoppingBag className="stroke-[2] size-[1.8rem] group-hover:stroke-slate-500" />
              </span>
              <span className="text-normal font-medium group-hover:text-slate-500">
                Order
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* side bottom */}
      <div className=" flex flex-col gap-3">
        <h3 className=" text-normal text-slate-500">Account</h3>
        <div className="flex flex-col">
          <Link
            href={"#"}
            className=" py-4 rounded-[.8rem] group hover:duration-300  flex gap-6 items-center"
          >
            <span>
              {/* <Home className="stroke-[2] group-hover:stroke-white size-[1.8rem]" /> */}
              <LogIn className="stroke-[2] group-hover:stroke-slate-500 size-[1.8rem]" />
            </span>
            <span className="text-normal group-hover:text-slate-500 font-medium">
              Log out
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
