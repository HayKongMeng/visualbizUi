import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar/Navbar";
import NavbarInside from "@/app/components/Navbar/NavbarInside";

function layout({ children }) {
  return (
    <>
      <section className="text-normal transition-all">{children}</section>
    </>
  );
}

export default layout;
