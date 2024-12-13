"use client";
import Image from "next/image";
import React from "react";
import BackIcon from "../../(forgot-password)/components/BackIcon";
import Link from "next/link";
import Button from "@/app/components/Button";
import OTP from "../../(forgot-password)/components/OTP";
import OTPInput from "react-otp-input";
import { useState } from "react";

import {
  resendOTPService,
  verifyRegisterService,
} from "@/app/services/authenticationServices";
import { useForm } from "react-hook-form";
import { authInfoGlobal } from "@/app/store/authentication";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const route = useRouter();
  const email = authInfoGlobal((state) => state.email);
  const username = authInfoGlobal((state) => state.username);
  if (!email) {
    toast.error(
      `You have not registered yet. Redirecting to register........`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      }
    );
    redirect("/register");
  }
  // console.log(otp);
  async function onSubmit(e) {
    e.preventDefault();
    // const isVerify = s;
    const data = await verifyRegisterService(otp)
    if(data.error){
        toast.error(data.error, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
    }
    console.log("verify",data)
      route.push("/login");
      route.refresh();
    
  }

  async function resendCode(e) {
    e.preventDefault();
    await resendOTPService(email);
  }
  return (
    <section className="grid lg:grid-cols-2 h-screen">
      <section className="rounded-l-xl  w-full h-full hidden lg:flex items-center justify-center">
        <section className="w-[80rem] mx-auto  ">
          <Image
            src="/svgs/otp.svg"
            width={1000}
            height={1000}
            className="h-full"
            alt="iMAGE"
            priority
          />
        </section>
      </section>
      <section className="rounded-r-xl bg-white p-5 w-full h-full flex justify-start lg:justify-center flex-col">
        <section className="flex  items-center justify-self-center justify-center h-[100%]">
          <section className="flex flex-col gap-5 w-full items-center justify-center">
            <section className="py-8 flex flex-col gap-8">
              <section className="text-header text-center font-bold">
                Verify Code
              </section>
              <section className="text-near_normal">
                Hey {username} We have sent an email to{" "}
                <span className="font-semibold text-near_normal">{email}</span>
              </section>
            </section>
            {/* <AuthInput placeholder="Email Address" /> */}
            {/* <OTP /> */}
            <form onSubmit={onSubmit}>
              <OTPInput
                // inputStyle="inputStyle"
                skipDefaultStyles
                numInputs={6}
                onChange={setOtp}
                renderSeparator={<span>|</span>}
                value={otp}
                // {...register("otp")}
                // placeholder={placeholder}
                containerStyle=""
                inputStyle="text-4xl  border p-5 w-[50px] text-black text-center"
                inputType="text"
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus
              />
              <section className="mt-8">
                <Button>Continue</Button>
              </section>
            </form>
            <section className="flex gap-5 flex-col">
              <section className="text-near_normal">
                Don&apos;t receive the code?
                <span
                  onClick={resendCode}
                  className="font-bold ml-5 text-near_normal cursor-pointer"
                >
                  Resend
                </span>{" "}
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default VerifyEmail;
