"use client";
import { Html5QrcodeScanner } from "html5-qrcode";
import React from "react";
import { useEffect } from "react";

const NewScanner = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("scan-qr", {
      qrbox: { width: 300, height: 300 },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      console.log("result ", result);
    }

    function error(result) {
      console.log("error ", result);
      //   scanner.clear();
    }
  }, []);

  return (
    <div>
      <p>NewScanner</p>
      <div id="scan-qr"></div>
    </div>
  );
};

export default NewScanner;
