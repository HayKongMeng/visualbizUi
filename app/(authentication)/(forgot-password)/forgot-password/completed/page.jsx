import Image from "next/image";
import React from "react";
import AuthInput from "@/app/(authentication)/components/AuthInput";
import Button from "@/app/components/Button";
import BackIcon from "../../components/BackIcon";
import Link from "next/link";

function Completed() {
  return (
    <section className="flex  flex-col h-full">
      <section className="flex justify-between items-center">
        <Link href="/forgot-password/verify">
          <section className="flex gap-3 items-center">
            <BackIcon />
            <section>Back</section>
          </section>
        </Link>
        <section>
          <Image
            src="/our-logo.PNG"
            alt="VisualBiz-Logo"
            width={1000}
            height={1000}
            priority
            className="w-full h-[4.5rem]"
          />
        </section>{" "}
      </section>
      <section className="flex lg:justify-between  items-center justify-self-center justify-center h-[100%]">
        <section className="flex flex-col gap-5 w-full lg:w-[50%] lg:pr-36">
          <section className="py-8 flex flex-col gap-8 text-center">
            <section className="text-header font-bold">Congratulation</section>
            <section>Your password has been reset successfully</section>
          </section>
          <section className="mt-8">
            <Link href="/login">
              <Button>Back to login</Button>
            </Link>
          </section>
        </section>

        <section className="lg:block hidden relative">
          <Image
            src="/completed.svg"
            alt="Completed Image"
            width={800}
            height={800}
          />
        </section>
      </section>
    </section>
  );
}

export default Completed;
