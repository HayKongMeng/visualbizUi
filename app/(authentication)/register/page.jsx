"use client";
import React from "react";
import AuthTabs from "../components/AuthTabs";
import PasswordInput from "../components/PasswordInput";
import AuthInput from "../components/AuthInput";
import Button from "../../components/Button";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { registerZod } from "@/app/zodValidation/AuthenticationValidation";
import { registerService } from "@/app/services/authenticationServices";
import { useRouter } from "next/navigation";
import { authInfoGlobal } from "@/app/store/authentication";

function Register() {
  const route = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting},
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerZod),
  });
  const setEmail = authInfoGlobal((state) => state.setEmail);
  const setUsername = authInfoGlobal((state) => state.setUsername);
  async function onSubmit(data) {
    console.log("data", data);
    const sendData = await registerService(data);
    setEmail(data.email);
    setUsername(data.username);
    console.log("sendData", sendData);
    if (sendData) {
      route.push("/register/verify");
      route.refresh();
    }
  }
  return (
    <section className="grid lg:grid-cols-2 h-screen  ">
      <section className="rounded-l-xl  w-full h-full hidden lg:flex items-center justify-center">
        <section className="w-[80rem] mx-auto  ">
          <Image
            src="/svgs/signin.svg"
            width={1000}
            height={1000}
            className="h-full"
            alt="iMAGE"
            priority
          />
        </section>
      </section>
      <section className="rounded-r-xl bg-white w-full h-full p-5 flex justify-start lg:justify-center items-center flex-col">
        <section className="w-full flex flex-col items-center">
          <section className="h-[10rem] flex items-center">
            <AuthTabs />
          </section>
          <section className=" lg:h-[50rem] w-full lg:px-20">
            <section className="text-center py-10">
              <section className="text-header font-bold">Register</section>
              <section className="text-near_normal">
                Please fill in the details to create an account with us{" "}
              </section>
            </section>
            <form onSubmit={handleSubmit(onSubmit)}>
              <section className="flex flex-col gap-5 w-full  mb-10">
                {/* <input type="text" {...register("username")} /> */}
                <section className="flex flex-col gap-2">
                  <label>Username</label>
                  <input
                    {...register("username")}
                    className="focus:outline-none border text-near_normal rounded-normal py-4 px-6 "
                  />
                  {errors.username && (
                    <div className="text-red-500 text-sm">
                      {errors.username.message}
                    </div>
                  )}
                </section>
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
                <section className="flex flex-col gap-2">
                  <label>Confirmed Password</label>
                  <input
                    type="password"
                    {...register("confirmPassword")}
                    className="focus:outline-none border text-near_normal rounded-normal py-4 px-6 "
                  />
                </section>
                {errors.confirmPassword && (
                  <div className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </section>
              <Button loading={isSubmitting} type="submit">Register</Button>
            </form>

            <section className="text-center text-primary p-[15px] text-near_normal">
              Already have an account?{" "}
              <span className="text-[#030303]">
                <Link href="/login">Login</Link>
              </span>{" "}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Register;
