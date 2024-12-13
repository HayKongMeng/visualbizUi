import React from "react";
import Image from "next/image";
import {
  Checkbox,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import OrderFilter from "./(seller)/components/Order Components/OrderFilter";

const SelectProduct = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const data = [
    {
      id: 1,
      img: "/images/profile.JPG",
      product: "Coca",
      price: "30",
      date: "2/04/2024",
      status: "available",
    },
    {
      id: 2,
      img: "/images/profile.JPG",
      product: "Pepsi",
      price: "30",
      date: "2/04/2024",
      status: "available",
    },
    {
      id: 3,
      img: "/images/profile.JPG",
      product: "Pepsi",
      price: "30",
      date: "2/04/2024",
      status: "available",
    },
    {
      id: 4,
      img: "/images/profile.JPG",
      product: "Pepsi",
      price: "30",
      date: "2/04/2024",
      status: "available",
    },
    {
      id: 5,
      img: "/images/profile.JPG",
      product: "Pepsi",
      price: "30",
      date: "2/04/2024",
      status: "available",
    },
  ];
  return (
    <div className="w-full">
      <div className="font-semibold text-[2rem] pb-6">Select Product</div>
      <div className="py-5">
        <select
          id="percentage"
          name="percentage"
          className="border text-xl rounded-2xl border-gray-300 mt-[0.5] w-[15rem] p-2 "
        >
          <option className="text-xl" value="">
            Filter
          </option>
          <option className="text-xl" value="">
            product
          </option>
          <option className="text-xl" value="">
            product
          </option>
        </select>
      </div>
      <Table
        id="hide-scrollbar"
        // topContent={topContent}
        removeWrapper
        isHeaderSticky
        topContentPlacement="outside"
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "bg-bg",
          base: " h-[40rem] my-auto overflow-y-auto ",
          table: "h-full  overflow-y-scroll ",
          tr: "border rounded-xl border-bg",
          td: "py-[1]",
          // thead: "bg-red-500 w-full p-0 m-0"
        }}
        aria-label="Dashboard Table"
      >
        <TableHeader className="py-5">
          <TableColumn className="bg-primary ">
            <input type="checkbox" />
          </TableColumn>
          <TableColumn className="bg-primary">
            <div className={` text-2xl text-white `}>Product</div>
          </TableColumn>
          <TableColumn className="bg-primary">
            <div className={` text-2xl text-white text-center `}>Price</div>
          </TableColumn>
          <TableColumn className="bg-primary">
            <div className={` text-2xl text-white text-center`}>Date</div>
          </TableColumn>
          <TableColumn className="bg-primary">
            <div className={` text-2xl text-white text-center`}>Status</div>
          </TableColumn>
        </TableHeader>
        <TableBody
          id="hide-scrollbar"
          emptyContent={<div className="h-full ">No more content</div>}
        >
          {data.map((item, idx) => (
            <TableRow key={idx} classNames={{}} className=" ">
              <TableCell className="text-xl">
                <input type="checkbox" />
              </TableCell>
              <TableCell className="text-[1.4rem]">
                <div className="flex items-center gap-5">
                  <div className=" w-[60px] h-[6rem]  bg-white ">
                    <Image
                      src={item.img}
                      width={1000}
                      height={1000}
                      className="rounded-xl"
                      alt="Product-img"
                    />
                  </div>
                  {item.product}
                </div>
              </TableCell>
              <TableCell className="text-[1.4rem] text-center">
                {item.price}$
              </TableCell>
              <TableCell className="text-[1.4rem] text-center">
                {item.date}
              </TableCell>
              <TableCell className="text-[1.4rem] text-center">
                <div className="px-3 text-[1rem] py-1 rounded-xl text-green-500 border border-green-500">
                  <div className="flex items-center justify-around">
                    <div className="rounded-full h-[0.5rem] w-[0.5rem] bg-green-500"></div>
                    <div className="text-green-500">{item.status}</div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SelectProduct;
