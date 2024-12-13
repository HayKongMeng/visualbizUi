import React from "react";

function OTP() {
  return (
    <section className="flex gap-5 lg:gap-10 flex-wrap items-center lg:justify-center">
      <input
        className="border-4 rounded-xl w-[50px] h-[50px] text-center font-bold"
        maxLength={1}
      />
  
    </section>
  );
}

export default OTP;
