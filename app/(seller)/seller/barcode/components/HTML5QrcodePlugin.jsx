// file = Html5QrcodePlugin.jsx
import { Html5QrcodeScanner, html5QrCode } from "html5-qrcode";
import { useRef } from "react";
import { useEffect } from "react";

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
  let config = {};
  if (props.fps) {
    config.fps = props.fps;
  }
  if (props.qrbox) {
    config.qrbox = props.qrbox;
  }
  if (props.aspectRatio) {
    config.aspectRatio = props.aspectRatio;
  }
  if (props.disableFlip !== undefined) {
    config.disableFlip = props.disableFlip;
  }
  if (props.rememberLastUsedCamera) {
    config.rememberLastUsedCamera = props.rememberLastUsedCamera;
  }
  return config;
};

const Html5QrcodePlugin = (props) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current === null) {
      ref.current = new Html5QrcodeScanner(qrcodeRegionId, { ...props });
    }
    const html5QrcodeScanner = ref.current;

    setTimeout(() => {
      const container = document.getElementById(qrcodeRegionId);
      if (html5QrcodeScanner && container?.innerHTML == "") {
        html5QrcodeScanner.render(
          props.qrCodeSuccessCallback,
          props.qrCodeErrorCallback
        );
      }
    }, 0);

    return () => {
      if (html5QrcodeScanner) {
        html5QrcodeScanner.clear();
      }
    };
  }, []);
  function openBarcode() {
    var html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, {
      fps: 25,
      qrbox: { width: 300, height: 250 },
    });
    // if (active) {
    //   html5QrcodeScanner.clear();
    html5QrcodeScanner.render(
      props.qrCodeSuccessCallback,
      props.qrCodeErrorCallback
    );
    setScanData([
      ...scanData,
      {
        id: crypto.randomUUID(),
        stock: "",
        quantity: "",
        product_code: decodedText,
      },
    ]);
    document.getElementById("barcode").showModal();
  }
  return (
    <>
      {" "}
      {/* <button onClick={openBarcode}>start again</button> */}
      <div id={qrcodeRegionId} />
    </>
  );
};

export default Html5QrcodePlugin;
