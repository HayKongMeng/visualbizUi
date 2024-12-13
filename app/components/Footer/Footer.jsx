import React from "react";
import Container from "../Container";
import { footer_list } from "@/app/data/footer_list";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-footer w-full mt-big_margin bg-[rgb(247_247_247)] ">
      <Container>
        <main className="py-big_paddding border-b grid grid-cols-5">
          {footer_list.map((list, idx) => (
            <section key={idx} className="flex flex-col gap-4">
              <h3 className="text-[2rem] font-medium">{list.header}</h3>
              <ul className="flex flex-col gap-3">
                {list.list.map((l, i) => (
                  <li
                    key={i}
                    className="text-mid hover:translate-x-1 transition-all hover:text-gray-500 font-normal capitalize cursor-pointer"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className="flex flex-col gap-4">
            <h3 className="text-[2rem]">Get in touch</h3>
            <ul className="flex gap-4">
              <li>
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon h-[2.4rem] "
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                      fillRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon h-[2.4rem]"
                    viewBox="0 0 512 512"
                  >
                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon h-[2.4rem]"
                    viewBox="0 0 512 512"
                  >
                    <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </section>
        </main>
        <main className="py-md_paddding ">
          <p className=" text-small_title">@ 2024 Virtual Biz - Reserved</p>
        </main>
      </Container>
    </footer>
  );
};

export default Footer;
