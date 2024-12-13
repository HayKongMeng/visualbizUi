"use client";
import React, { useEffect, useState } from "react";
import SellerProfileHeader from "../../components/SellerProfileHeader";
import { Html5QrcodeScanner } from "html5-qrcode";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { setToast } from "@/app/utils/util_function";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import ButtonIncreaseQuantityV2 from "@/app/components/Buttons/ButtonIncreaseQtyV2";
import { restock } from "@/app/store/stock";
import IncreaseStock from "./components/IncreaseStock";
import Html5QrcodePlugin from "./components/HTML5QrcodePlugin";
function BarcodePage() {
  const session = useSession();
  console.log(session);
  const [scanResult, setScanResult] = useState(null);
  const [scanData, setScanData] = useState([]);
  // const [stock, setStock] = useState(0)
  const stock = restock((state) => state.stock);
  const setStock = restock((state) => state.setStock);
  const [quantity, setQuantity] = useState(0);

  // console.log("stock", stock);
  // useEffect(() => {
  //   var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
  //     fps: 25,
  //     qrbox: { width: 300, height: 250 },
  //   });
  //   // if (active) {
  //   //   html5QrcodeScanner.clear();
  //   // }
  //   html5QrcodeScanner.render(onScanSuccess);

  //   function onScanSuccess(decodedText, decodedResult) {
  //     // Handle on success condition with the decoded text or result.
  //     setScanResult(decodedText);
  //     console.log(`Scan result: ${decodedText}`, decodedResult);
  //     // setActive(true);
  //     setScanData([
  //       ...scanData,
  //       {
  //         id: crypto.randomUUID(),
  //         stock: "",
  //         quantity : "",
  //         product_code: decodedText,
  //       },
  //     ]);
  //     document.getElementById("barcode").showModal();
  //     // document.getElementById("barcode").showModal()
  //     html5QrcodeScanner.clear();
  //   }
  // }, [scanData,quantity,stock]);
  function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    setScanResult(decodedText);

    console.log(`Scan result: ${decodedText}`, decodedResult);
    console.log("sdfsddsfs");
    // setActive(true);
    setScanData([
      ...scanData,
      {
        id: crypto.randomUUID(),
        stock: "",
        quantity: "",
        product_code: decodedText,
      },
    ]);
    console.log(scanData);

    document.getElementById("barcode").showModal();
    // document.getElementById("barcode").showModal()
    // html5QrcodeScanner.clear();
  }

  function handleRestock() {
    if (quantity <= 0) {
      return;
    } else {
      toast.success(quantity > 0 ? `${quantity} items restock.` : "", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
    }
  }
  return (
    <>
      <div className="pl-5  overflow-y-hidden">
        <SellerProfileHeader title={"Barcode"} />
      </div>
      <div className="pb-10 h-[95%] overflow-y-scroll">
        <input type="text" />
        <div className="w-[50rem] mx-auto my-auto">
          <Html5QrcodePlugin
            fps={25}
            qrbox={300}
            // scanResult={scanResult || ""}
            disableFlip={false}
            rememberLastUsedCamera={false}
            qrCodeSuccessCallback={onScanSuccess}
          />
        </div>
        {/* {scanData.length > 0 && (
        <button onClick={openBarcode}>Start again</button>
      )} */}
        {/* {scanResult !== null && (
          <div className="w-[50rem] mx-auto my-auto border">
            Success:{" "}
            <Link href={scanResult ? scanResult : "/seller/barcode"}>
              click
            </Link>
            <div>{scanResult}</div>
          </div>
        )} */}
        <div>
          {scanData.length > 0 && (
            <>
              {/* <button onClick={}>Start again</button> */}
              <div className="font-semibold text-title">Scanned History</div>
              {scanData.map((data, index) => (
                <div key={data.id}>
                  <div className=" border p-5 bg-bg rounded-2xl cursor-pointer">
                    <div className="flex items-center gap-5">
                      <div className="">
                        <Image
                          width={1000}
                          height={1000}
                          alt="product img"
                          priority
                          src={"/images/midas food.jpg"}
                          className="col-span- bg-bg rounded-xl h-[10rem] row-span-1  group-hover:scale-[1.3] duration-300"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold">Midas</div>
                        <div>Total Stock : {stock + quantity}</div>
                        <div>
                          Restock :{" "}
                          <span className="text-green-500">+ {quantity}</span>
                        </div>
                      </div>
                    </div>
                    <div>Code: {data.product_code}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <dialog id="barcode" className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-14">
          <main className="grid grid-cols-2 p-6  gap-[3.2rem]">
            <section className="grid grid-rows- gap-[2rem]">
              <div className="">
                <Image
                  width={1000}
                  height={1000}
                  alt="product img"
                  priority
                  src={"/images/midas food.jpg"}
                  className="col-span- rounded-small  row-span-1  group-hover:scale-[1.3] duration-300"
                />
              </div>
            </section>
            <section className="flex flex-col gap-6">
              <h3 className="text-big_header">Midas</h3>
              <section>
                <p className="text-normal text-secondary font-bold">$ 1.00$</p>
              </section>
              <section className="flex flex-col gap-[2rem]">
                <section className="grid grid-cols-[10rem_1fr] items-end gap-[3rem]">
                  <p className="text-mid font-medium">Category</p>
                  <p className="text-mid">Snack</p>
                </section>
                <section className="grid grid-cols-[10rem_1fr] items-end gap-[3rem]">
                  <p className="text-mid font-medium">Stock</p>
                  <p className="text-mid">
                    {stock}
                    {!quantity <= 0 && (
                      <span className="text-green-500">+{quantity}</span>
                    )}
                  </p>
                </section>
                <section className="grid grid-cols-[10rem_1fr] items-end gap-[3rem]">
                  <p className="text-mid font-medium">Discount</p>
                  <div className="flex gap-2 items-center">
                    <p className="text-mid">20</p>
                    <span>%</span>
                  </div>
                </section>
                <section className="grid grid-cols-[10rem_1fr] items-start gap-[3rem]">
                  <p className="text-mid font-medium">Description</p>
                  <p className="text-mid">The best snack </p>
                </section>
                <section className=" mt-auto">
                  <section className="flex justify-between items-center w-full">
                    <section className="flex gap-4">
                      {/* <label
                        // onClick={() =>
                        //   setToast(
                        //     "success",
                        //     "🤩 Thank your for ordering our product"
                        //   )
                        // }
                        htmlFor={"my_modal_" + "ffae"}
                        className=" bg-primary cursor-pointer small-btn rounded-small text-white"
                      >
                        Restock
                      </label> */}
                      <form method="dialog" className="">
                        <button
                          onClick={handleRestock}
                          className=" bg-primary cursor-pointer small-btn rounded-small text-white"
                        >
                          Restock
                        </button>
                      </form>

                      <IncreaseStock
                        stock={stock}
                        setStock={setStock}
                        setQuantity={setQuantity}
                        quantity={quantity}
                      />
                      {/* <StoreToCartButton data={product} type="product" /> */}
                    </section>
                  </section>
                </section>
              </section>
            </section>
            <form method="dialog" className="absolute right-[1rem] top-[1rem]">
              <button className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon size-[3rem] p-2 hover:duration-300 hover:bg-primary rounded-full hover:stroke-white stroke-black"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    //   stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M368 368L144 144M368 144L144 368"
                  />
                </svg>
              </button>
            </form>
          </main>
        </div>
      </dialog>
    </>
  );
}

export default BarcodePage;
