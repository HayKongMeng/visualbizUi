// import Image from "next/image";
"use client";
import React from "react";
import AuthInput from "@/app/(authentication)/components/AuthInput";
import Button from "@/app/components/Button";
import BackIcon from "../../components/BackIcon";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { forgotEnterEmailService, forgotPassEmail, verifyRegisterService } from "@/app/services/authenticationServices";
import { verifyEmail } from "@/app/services/auth.service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authInfoGlobal } from "@/app/store/authentication";
import pRetry from "p-retry";

function ForgotPassword() {
  const setEmail = authInfoGlobal((state)=>state.setEmail)
  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
const route = useRouter();
  async function onSubmit(data) {
    // await forgotPassEmail(data);
   const res =  await forgotEnterEmailService(data)
   console.log("ress",res)
  //  if(res.details === ""){

  //  }

  //  if(res?.errors){
  //   toast.error(
  //    res.errors,
  //     {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       // transition: Bounce,
  //     }
  //   );
  //   return;
  //  }
   switch(res?.detail){
    case "Your otp code is not expire yet":
      toast.success(
        ` OTP code not expired yet. Please input your latest OTP`,
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
      setEmail(data.email)
      route.push("/forgot-password/verify")
      break;
   }
  }
  return (
    <section className="flex  flex-col h-full ">
      <section className="flex justify-between items-center">
        <Link href="/login">
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
        </section>
      </section>
      <section className="flex lg:justify-between  items-center justify-self-center justify-center h-[100%]">
        <section className="flex flex-col gap-5 w-full lg:w-[50%] lg:pr-36">
          <section className="py-8 flex flex-col gap-8">
            <section className="text-header font-bold">Forgot Password</section>
            <section className="text-near_normal">
              Please enter your email below
            </section>
          </section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="flex flex-col gap-2">
              <input
                type="email"
                {...register("email")}
                className="focus:outline-none border text-near_normal rounded-normal py-4 px-6 "
              />
              {errors.email && (
                <div className="text-red-500 text-sm">
                  {errors.email.message}
                </div>
              )}
            </section>
            <section className="mt-8">
              <Button type="submit" loading={isSubmitting}>Continue</Button>
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

export default ForgotPassword;
