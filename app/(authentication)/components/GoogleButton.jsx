import React from "react";
import GoogleIcon from "./GoogleIcon";
import Image from "next/image";

function GoogleButton() {
  return (
    <button className=" text-primary rounded-full bg-bg flex items-center text-near_normal justify-center w-full">
      <section className="p-5">
        <Image
          src="/googleicon.svg"
          height={50}
          width={50}
          alt="google_logo"
          className=""
        />{" "}
      </section>

      <span>Continue with Google</span>
    </button>
  );
}

export default GoogleButton;
