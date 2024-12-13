import React from "react";
import NavbarAboutUs from "../components/Navbar/NavbarAboutUs";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NavbarInside from "../components/Navbar/NavbarInside";

const layout = ({ children }) => {
  return (
    <main>
      <NavbarAboutUs />
      <Navbar>
        <NavbarInside />
      </Navbar>

      {children}
      <Footer />
    </main>
  );
};

export default layout;
