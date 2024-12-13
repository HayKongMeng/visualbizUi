"use client";
import React, { useState } from "react";

const ButtonIncreaseQuantityV2 = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <section className="flex gap-[2rem] items-center bg-bg py-2 px-6 rounded-small">
      <button
        onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
        className={`text-near_normal ${quantity <= 0 ? "text-gray-400" : ""}`}
      >
        -
      </button>
      <p className="size-[2rem] text-secondary font-medium p-2 flex items-center justify-center border rounded-md text-normal">
        {quantity}
      </p>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="text-near_normal"
      >
        +
      </button>
    </section>
  );
};

export default ButtonIncreaseQuantityV2;
