import React from "react";
function SellerTextArea({ label, ...props }) {
  return (
    <section className="flex flex-col gap-2 w-full">
      <label className="text-near_normal">{label}</label>
      <textarea
        {...props}
        className="focus:outline-none border rounded-normal py-4 px-4 text-near_normal"
      />
    </section>
  );
}

export default SellerTextArea;
