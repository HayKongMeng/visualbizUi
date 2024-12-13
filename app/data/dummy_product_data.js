import { type } from "os";
import { unsplashBaseUrl } from "./dummy_service_data";

const getUnsplashUrl = (category, productName) => {
  const query = `${category},${productName}`.replace(/\s+/g, "-").toLowerCase();
  return `${unsplashBaseUrl}?${query}`;
};

export const productList = [
  {
    type: "service",
    product_name: "Golf Field",
    id: "ID_001",
    rating_point: 4.5,
    img_src: "/images/product-imgs/golf.jpeg",

    category: "Electronics",
    stock: 120,
    discount: 10,
    price: 99.99,
    description:
      "This amazing gadget offers cutting-edge technology with a sleek design. Perfect for tech enthusiasts looking for the latest innovation.",
  },
  {
    type: "shop",
    product_name: "Cam Store",
    id: "ID_002",
    rating_point: 3.8,
    img_src: "/images/product-imgs/cam.jpg",
    category: "Home Appliances",
    stock: 75,
    discount: 15,
    price: 49.99,
    description:
      "A wonderful device that makes household chores easier and more efficient. Reliable performance and user-friendly features.",
  },
  {
    product_name: "Noodle Shop",
    id: "ID_003",
    rating_point: 4.2,
    type: "shop",
    img_src: "/images/product-imgs/noodle.jpeg",

    category: "Gadgets",
    stock: 50,
    discount: 5,
    price: 29.99,
    description:
      "A fantastic item that combines functionality and style. Ideal for daily use with superior durability and design.",
  },
  {
    product_name: "Chicken Lover",
    id: "ID_004",
    rating_point: 4.9,
    img_src: "/images/product-imgs/chicken.jpeg",
    type: "shop",
    category: "Tools",
    stock: 200,
    discount: 20,
    price: 79.99,
    description:
      "An incredible tool for professionals and DIY enthusiasts. Offers high precision and ease of use for various tasks.",
  },
  // {
  //   product_name: "Superb Instrument",
  //   id: "ID_005",
  //   rating_point: 3.7,
  //   img_src: getUnsplashUrl("Musical Instruments", "Superb Instrument"),
  //   category: "Musical Instruments",
  //   stock: 30,
  //   discount: 10,
  //   price: 199.99,
  //   description:
  //     "This superb instrument delivers exceptional sound quality. Perfect for musicians of all levels seeking great performance.",
  // },
  // {
  //   product_name: "Amazing Device",
  //   id: "ID_006",
  //   rating_point: 4.1,
  //   img_src: getUnsplashUrl("Electronics", "Amazing Device"),
  //   category: "Electronics",
  //   stock: 95,
  //   discount: 12,
  //   price: 89.99,
  //   description:
  //     "An amazing device that brings the latest technology to your fingertips. Reliable, efficient, and easy to use.",
  // },
  // {
  //   product_name: "Wonderful Gadget",
  //   id: "ID_007",
  //   rating_point: 4.3,
  //   img_src: getUnsplashUrl("Gadgets", "Wonderful Gadget"),
  //   category: "Gadgets",
  //   stock: 110,
  //   discount: 8,
  //   price: 39.99,
  //   description:
  //     "A wonderful gadget designed to enhance your daily life. Compact, powerful, and full of features.",
  // },
  // {
  //   product_name: "Fantastic Tool",
  //   id: "ID_008",
  //   rating_point: 4.0,
  //   img_src: getUnsplashUrl("Tools", "Fantastic Tool"),
  //   category: "Tools",
  //   stock: 150,
  //   discount: 18,
  //   price: 59.99,
  //   description:
  //     "A fantastic tool that offers high efficiency and durability. Perfect for all your construction and repair needs.",
  // },
  // {
  //   product_name: "Incredible Item",
  //   id: "ID_009",
  //   rating_point: 3.9,
  //   img_src: getUnsplashUrl("Household Items", "Incredible Item"),
  //   category: "Household Items",
  //   stock: 85,
  //   discount: 5,
  //   price: 19.99,
  //   description:
  //     "An incredible item that adds convenience and style to your home. High-quality and built to last.",
  // },
  // {
  //   product_name: "Superb Device",
  //   id: "ID_010",
  //   rating_point: 4.8,
  //   img_src: getUnsplashUrl("Home Appliances", "Superb Device"),
  //   category: "Home Appliances",
  //   stock: 40,
  //   discount: 15,
  //   price: 129.99,
  //   description:
  //     "This superb device offers unparalleled performance and reliability. A must-have for any modern home.",
  // },
  // {
  //   product_name: "Amazing Instrument",
  //   id: "ID_011",
  //   rating_point: 4.7,
  //   img_src: getUnsplashUrl("Musical Instruments", "Amazing Instrument"),
  //   category: "Musical Instruments",
  //   stock: 25,
  //   discount: 10,
  //   price: 179.99,
  //   description:
  //     "An amazing instrument with exceptional sound quality and craftsmanship. Ideal for musicians seeking superior performance.",
  // },
  // {
  //   product_name: "Wonderful Tool",
  //   id: "ID_012",
  //   rating_point: 4.4,
  //   img_src: getUnsplashUrl("Tools", "Wonderful Tool"),
  //   category: "Tools",
  //   stock: 130,
  //   discount: 7,
  //   price: 49.99,
  //   description:
  //     "A wonderful tool designed for precision and ease of use. Perfect for both professional and DIY projects.",
  // },
  // {
  //   product_name: "Fantastic Gadget",
  //   id: "ID_013",
  //   rating_point: 3.6,
  //   img_src: getUnsplashUrl("Gadgets", "Fantastic Gadget"),
  //   category: "Gadgets",
  //   stock: 140,
  //   discount: 6,
  //   price: 34.99,
  //   description:
  //     "A fantastic gadget that combines functionality and style. Ideal for everyday use and reliable performance.",
  // },
  // {
  //   product_name: "Incredible Instrument",
  //   id: "ID_014",
  //   rating_point: 4.6,
  //   img_src: getUnsplashUrl("Musical Instruments", "Incredible Instrument"),
  //   category: "Musical Instruments",
  //   stock: 35,
  //   discount: 20,
  //   price: 189.99,
  //   description:
  //     "An incredible instrument that delivers rich sound quality. Perfect for musicians looking for high-quality performance.",
  // },
  // {
  //   product_name: "Superb Item",
  //   id: "ID_015",
  //   rating_point: 3.5,
  //   img_src: getUnsplashUrl("Household Items", "Superb Item"),
  //   category: "Household Items",
  //   stock: 60,
  //   discount: 8,
  //   price: 24.99,
  //   description:
  //     "A superb item that offers practicality and style. Made from high-quality materials for long-lasting use.",
  // },
  // {
  //   product_name: "Amazing Tool",
  //   id: "ID_016",
  //   rating_point: 4.0,
  //   img_src: getUnsplashUrl("Tools", "Amazing Tool"),
  //   category: "Tools",
  //   stock: 170,
  //   discount: 12,
  //   price: 69.99,
  //   description:
  //     "An amazing tool that provides efficiency and durability. Ideal for construction, repair, and DIY projects.",
  // },
  // {
  //   product_name: "Wonderful Instrument",
  //   id: "ID_017",
  //   rating_point: 4.3,
  //   img_src: getUnsplashUrl("Musical Instruments", "Wonderful Instrument"),
  //   category: "Musical Instruments",
  //   stock: 45,
  //   discount: 10,
  //   price: 159.99,
  //   description:
  //     "A wonderful instrument with excellent sound quality. Suitable for musicians of all levels.",
  // },
  // {
  //   product_name: "Fantastic Device",
  //   id: "ID_018",
  //   rating_point: 3.8,
  //   img_src: getUnsplashUrl("Electronics", "Fantastic Device"),
  //   category: "Electronics",
  //   stock: 100,
  //   discount: 15,
  //   price: 109.99,
  //   description:
  //     "A fantastic device that combines innovation with ease of use. Perfect for tech enthusiasts seeking reliable performance.",
  // },
  // {
  //   product_name: "Incredible Gadget",
  //   id: "ID_019",
  //   rating_point: 4.9,
  //   img_src: getUnsplashUrl("Gadgets", "Incredible Gadget"),
  //   category: "Gadgets",
  //   stock: 200,
  //   discount: 20,
  //   price: 119.99,
  //   description:
  //     "An incredible gadget that offers the latest features and technology. Compact, powerful, and highly efficient.",
  // },
  // {
  //   product_name: "Superb Tool",
  //   id: "ID_020",
  //   rating_point: 4.2,
  //   img_src: getUnsplashUrl("Tools", "Superb Tool"),
  //   category: "Tools",
  //   stock: 160,
  //   discount: 10,
  //   price: 74.99,
  //   description:
  //     "A superb tool designed for professional and DIY use. High-quality materials ensure durability and excellent performance.",
  // },
];
