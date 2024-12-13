import React from "react";

const Container = ({ children, className }) => {
  return <main className={"w-container mx-auto " + className}>{children}</main>;
};

export default Container;
