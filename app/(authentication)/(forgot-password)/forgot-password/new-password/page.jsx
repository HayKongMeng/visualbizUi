"use client";
import Image from "next/image";
import React from "react";
import AuthInput from "@/app/(authentication)/components/AuthInput";
import Button from "@/app/components/Button";
import BackIcon from "../../components/BackIcon";
import Link from "next/link";
import { authInfoGlobal } from "@/app/store/authentication";
import { useForm } from "react-hook-form";
import { forgotResetService } from "@/app/services/authenticationServices";
import { redirect, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPasswordZod } from "@/app/zodValidation/AuthenticationValidation";

function NewPassword() {
  const email = authInfoGlobal((state) => state.email);
  if (!email) {
    redirect("/register");
  }
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword:""
    },
    resolver: zodResolver(newPasswordZod)
  });
  async function onSubmit(data) {
   const req =  await forgotResetService(data,email);
   route.push("/login")
   route.refresh();
   console.log("login",req)
  }
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
          <section className="py-5 flex flex-col gap-5">
            <section className="text-header font-bold">
              Enter your new password
            </section>
            <section className="text-near_normal">
              Please enter your new password
            </section>
          </section>

          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="flex flex-col gap-2">
              <label>New Password</label>
              <input
                type="password"
                {...register("password")}
                className="focus:outline-none border text-near_normal rounded-normal py-4 px-6 "
              />
              {errors.password && (
                <div className="text-red-500 text-sm">
                  {errors.password.message}
                </div>
              )}
            </section>
            <section className="flex flex-col gap-2">
              <label>Confirmed New Password</label>
              <input
                type="password"
                {...register("confirmPassword")}
                className="focus:outline-none border text-near_normal rounded-normal py-4 px-6 "
              />
              {errors.confirmPassword && (
                <div className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </div>
              )}
            </section>
            
          <section className="mt-8">
              <Button>Continue</Button>
          </section>
          </form>

        </section>

        <section className="lg:block hidden relative">
          <Image
            src="/forgotpassword1.svg"
            alt="Forgot-Password Image"
            width={800}
            height={800}
          />
        </section>
      </section>
    </section>
  );
}

export default NewPassword;
