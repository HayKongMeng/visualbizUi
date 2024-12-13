import React from "react";

function TextBetweenLine({ children }) {
  return (
    <section className="relative flex items-center w-full py-10 text-near_normal">
      <section className="flex-grow border-t border-primary"></section>
      <span className="flex-shrink mx-4 text-primary">{children}</span>
      <section className="flex-grow border-t border-primary"></section>
    </section>
  );
}

export default TextBetweenLine;
