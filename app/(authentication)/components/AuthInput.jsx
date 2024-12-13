import React from "react";

function AuthInput({ label, ...props }) {
  return (
    <section className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        {...props}
        className="focus:outline-none border text-near_normal rounded-normal py-4 px-6 "
      />
    </section>
  );
}

export default AuthInput;
