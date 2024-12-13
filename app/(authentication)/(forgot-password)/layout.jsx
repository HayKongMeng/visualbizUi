import React from "react";

function layout({ children }) {
  return (
    <section className="bg-[url('/forgotpassword.svg')] bg-cover bg-center p-5 lg:p-0 bg-no-repeat h-screen flex items-center transition-all">
      <section className="bg-white rounded-xl mx-auto h-full w-full lg:h-[80%]  lg:w-[80%] p-16 lg:p-32 ">
        {children}
      </section>
    </section>
  );
}

export default layout;
