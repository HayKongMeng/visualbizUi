"use client";
import Image from "next/image";
import React from "react";
import AuthInput from "@/app/(authentication)/components/AuthInput";
import Button from "@/app/components/Button";
import BackIcon from "../../components/BackIcon";
import Link from "next/link";
import OTP from "../../components/OTP";
import OTPInput from "react-otp-input";
import { useState } from "react";
import {
  resendOTPService,
  verifyRegisterService,
} from "@/app/services/authenticationServices";
import { redirect, useRouter } from "next/navigation";
import { authInfoGlobal } from "@/app/store/authentication";
import { toast } from "react-toastify";
import pRetry from "p-retry";

function VerifyEmail() {
  const email = authInfoGlobal((state) => state.email);
  const route = useRouter();

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
    route.push("/forgot-password/enter-email");
    route.refresh();
  }
  const [otp, setOtp] = useState("");
  const [isLoading,setLoading] = useState(false)
  async function onSubmit(e) {
    e.preventDefault();
    // const isVerify = s;
    setLoading(true)
    const data = await verifyRegisterService(otp);
    console.log("dataotp" , data)
    if(data.errors){
      toast.error(data.errors, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    // transition: Bounce,
  })
  }else{
    setLoading(false)
    route.push("/forgot-password/new-password");
    route.refresh();
  }
  }
 

  async function resendCode(e) {
    e.preventDefault();
    await resendOTPService(email);
  }
  return (
    <section className="flex  flex-col h-full">
      <section className="flex justify-between items-center">
        <Link href="/forgot-password/enter-email">
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
        <section className="flex flex-col  gap-5 w-full lg:w-[50%] lg:pr-36">
          <section className="py-8 flex flex-col gap-8">
            <section className="text-header font-bold">Verify Code</section>
            <section className="text-near_normal">
              We have sent an email to{" "}
              <span className="font-semibold text-near_normal">{email}</span>
            </section>
          </section>
          {/* <AuthInput placeholder="Email Address" /> */}
          <section className="lg:w-[45rem] flex flex-col gap-10">
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
                inputStyle="text-4xl  border p-5 w-[60px] text-black text-center"
                inputType="text"
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus
              />
              <section className="mt-8">
              <Button type="submit" isLoading={isLoading}>Continue</Button>
              </section>
            </form>
          </section>

          <section className="mt-8 flex gap-5 flex-col">
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

export default VerifyEmail;
