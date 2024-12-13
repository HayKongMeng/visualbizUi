import React from "react";
import { ErrorComponent } from "./components/Error/ErrorComponent";

const PageNotFound = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      {/* <NotFound title="Not Found" /> */}
      <ErrorComponent title="Page was not found" />
    </main>
  );
};

export default PageNotFound;
