"use client";
import React from "react";
import AuthTabs from "../components/AuthTabs";
import PasswordInput from "../components/PasswordInput";
import { Input } from "@nextui-org/react";
import AuthInput from "../components/AuthInput";
import Button from "../../components/Button";
import Link from "next/link";
import TextBetweenLine from "../components/TextBetweenLine";
import GoogleButton from "../components/GoogleButton";
import Image from "next/image";
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginZod } from "@/app/zodValidation/AuthenticationValidation";
import { resendOTPService } from "@/app/services/authenticationServices";
import { authInfoGlobal } from "@/app/store/authentication";

function Login() {
  const route = useRouter();
  const setEmail = authInfoGlobal((state) => state.setEmail);
  const email = authInfoGlobal((state) => state.email);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginZod),
  });
  async function onSubmit(data) {
    const logins = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });
    console.log("hey logn", logins);
    setEmail(data.email);
    if (logins.error) {
      toast.error(logins.error, {
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
    if (logins.error === "Your account is not verify yet") {
      route.push("/register/verify");
      route.refresh();
    }
    // switch (logins.error) {
    //   case "Your account is not verify yet":
    //     toast.error(logins.error + " . Redirecting to OTP page.....", {
    //       position: "top-right",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       // transition: Bounce,
    //     });
    //     const resend = await resendOTPService(email)
    //     console.log(resend)
    //     route.push("/register/verify")
    //     route.refresh()
    //     break;
    //     case "Invalid Credentials":
    //     toast.error(logins.error + "  Please make sure your email and password is correct", {
    //       position: "top-right",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       // transition: Bounce,
    //     });
    //     break;
    // }
    if (logins.ok) {
      toast.success("Login Successfuly", {
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
      route.push("/");
      route.refresh();
      // redirect("/")
      // } else {
      //   toast.error("Error while login", {
      //     position: "top-right",
      //     autoClose: 2000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //     // transition: Bounce,
      //   });
    }
  }
  return (
    <section className="grid lg:grid-cols-2 h-screen">
      <section className="rounded-l-xl  w-full h-full hidden lg:flex items-center justify-center">
        <section className="w-[80rem] mx-auto  ">
          <Image
            src="/svgs/mobileregister.svg"
            width={1000}
            height={1000}
            className="h-full"
            alt="iMAGE"
            priority
          />
        </section>
      </section>
      <section className="rounded-r-xl bg-white p-5 w-full h-full flex justify-start lg:justify-center flex-col">
        <section className="w-full flex flex-col items-center lg:p-5">
          <section className="h-[10rem] flex items-center">
            <AuthTabs />
          </section>
          <section className=" lg:h-[50rem] w-full lg:px-20">
            <section className="text-center py-10">
              <section className="text-header font-bold">Log In</section>
              <section className="text-near_normal">
                Log in here with your email and password
              </section>
            </section>
            <form onSubmit={handleSubmit(onSubmit)}>
              <section className="flex flex-col gap-5 w-full mb-10 ">
                <section className="flex flex-col gap-2">
                  <label>Email</label>
                  <input
                    {...register("email")}
                    className="focus:outline-none border text-near_normal rounded-normal py-4 px-6 "
                  />
                  {errors.email && (
                    <div className="text-red-500 text-sm">
                      {errors.email.message}
                    </div>
                  )}
                </section>
                <section className="flex flex-col gap-2">
                  <label>Password</label>
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
                <section className="self-end text-primary ">
                  <Link
                    className="text-small_title"
                    href="/forgot-password/enter-email"
                  >
                    Forgot Password?
                  </Link>
                </section>
              </section>
              <Button loading={isSubmitting} type="submit">
                Login
              </Button>
            </form>
            <TextBetweenLine>Or Log in with</TextBetweenLine>
            <GoogleButton />
            <section className="text-center text-primary text-near_normal p-[15px]">
              Don&apos;t have any account?{" "}
              <span className="text-[#898B8C]">
                <Link href="/register">Sign up</Link>
              </span>{" "}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Login;
