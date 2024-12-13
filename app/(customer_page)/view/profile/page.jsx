import Container from "@/app/components/Container";
import { getCurrentUser } from "@/app/services/user.service";
import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();
  return (
    <section>
      <section className="relative">
        <Image
          height={2000}
          width={2000}
          priority
          alt="cover img"
          src={"/images/coverbg.jpeg"}
          className="object-cover h-[35rem]"
        />
        <section
          className={
            "absolute w-[100rem] h-full top-0 left-1/2 -translate-x-1/2"
          }
        >
          <div className="absolute translate-y-1/2 bottom-0 w-full flex justify-between items-end">
            <Image
              height={2000}
              width={2000}
              priority
              alt="cover img"
              src={getPhoto(user?.profile_img)}
              className="object-cover  size-[15rem] rounded-full p-2 bg-white border"
            />
            <Link
              href={"/profile/editprofile"}
              className="flex items-center group transition-all hover:scale-110 gap-4 py-[1rem] px-[3rem] rounded-full bg-primary"
            >
              <span className="text-white text-mid">Edit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon stroke-white size-[2rem] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                viewBox="0 0 512 512"
              >
                <path
                  d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
                <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" />
              </svg>
            </Link>
          </div>
        </section>
      </section>
      <section className={" w-[100rem] mx-auto mt-[10rem]"}>
        <div className="w-[60rem] flex flex-col gap-6">
          <h3 className="text-semi_header">{user?.username}</h3>
          <p className="text-mid">
            I&apos;m an avid explorer of knowledge with a keen interest in
            diverse topics ranging from technology and science to art and
            culture. I enjoy deep conversations, solving complex problems, and
            continuously learning new things. I value creativity, critical
            thinking, and the joy of discovering new perspectives. Whether
            it&apos;s through reading, traveling, or engaging with others, I
            thrive on experiences that expand my understanding of the world. My
            curiosity drives me to seek out new challenges and embrace
            opportunities for personal growth.
          </p>
        </div>
        <div className="mt-md_margin flex flex-col gap-6">
          <h4 className="text-normal font-medium border-b-2 self-start py-2 border-primary">
            Account
          </h4>
          <section className="grid grid-cols-2">
            <div className="left-side flex flex-col gap-6">
              <section className="">
                <p className="text-near_normal">Email Address</p>
                <main className="text-normal text-gray-500">{user.email}</main>
              </section>
              <section>
                <p className="text-near_normal">Address</p>
                <main className="text-normal text-gray-500">
                  {user.address}
                </main>
              </section>
            </div>
            <div className="left-side flex flex-col gap-6">
              <section className="">
                <p className="text-near_normal">Username</p>
                <main className="text-normal text-gray-500">
                  {user.username}
                </main>
              </section>
              <section>
                <p className="text-near_normal">Gender</p>
                <main className="text-normal text-gray-500">{user.gender}</main>
              </section>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default page;
