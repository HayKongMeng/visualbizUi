import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import NavbarInside from "../components/Navbar/NavbarInside";

const layout = ({ children }) => {
  return (
    <>
      <Navbar>
        <NavbarInside />
      </Navbar>
      {children}
      <Footer />
    </>
  );
};

export default layout;
