import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Poppins } from "next/font/google";
import MyToastContainer from "./components/Toast/MyToastContainer";
import AuthProvider from "./components/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import ReactQuery from "./components/ViewRating/ReactQuery";

export const metadata = {
  title: "Virtual Biz",
  description:
    "Virtual Biz is a best website for finding products and services",
};

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ReactQuery>
          <AuthProvider>
            <NextUIProvider>
              {children}
              <MyToastContainer />
            </NextUIProvider>
          </AuthProvider>
        </ReactQuery>
      </body>
    </html>
  );
}
