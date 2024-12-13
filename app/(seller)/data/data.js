import CustomerComment from "../components/CustomerComment";
import SellerProductDropdown from "../components/SellerProductDropdown";

const { default: Image } = require("next/image");

// export const historyRows = [
//   {
//     key: "1",
//     customers_history: {
//       img: "/images/profile.JPG",
//       name: "Thanak",
//       email: "Cool product I love 😃",
//     },
//     order_no_history: "6546",
//     amount_history: "$1000",
//     date_history: "10 Jan 2024",
//     status_history: "Paid",
//   },
// ];

// export const historyColumns = [
//   {
//     key: "customers_history",
//     label: "Customer Name",
//   },
//   {
//     key: "order_no_history",
//     label: "Order No",
//   },
//   {
//     key: "amount_history",
//     label: "Amount",
//   },
//   {
//     key: "date_history",
//     label: "Date",
//   },
//   {
//     key: "status_history",
//     label: "Status",
//   },
// ];

// export const productRows = [
//   {
//     key: "1",
//     img: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
//     productname: "Computer",
//     barcode: "2462345212",
//     category: "Electronic",
//     discount: "15%",
//     quantity: "4",
//   },
//   {
//     key: "2",
//     img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//     productname: "Computer",
//     barcode: "24623452554",
//     category: "Electronic",
//     discount: "15%",
//     quantity: "4",
//   },
//   {
//     key: "3",
//     img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D",

//     productname: "Cake",
//     barcode: "24621233452",
//     category: "Cake",
//     discount: "15%",
//     quantity: "4",
//   },
//   {
//     key: "4",
//     img: "https://media.istockphoto.com/id/478461614/photo/sponge-cake-with-cream-and-strawberries.jpg?s=2048x2048&w=is&k=20&c=DoCDND9PdeWbxZDw18v3MUL_aEz6bKWpLi-3nVXdaJA=",

//     productname: "Cake",
//     barcode: "2462223452",
//     category: "Cake",
//     discount: "15%",
//     quantity: "41",
//   },
//   {
//     key: "5",
//     img: "https://images.unsplash.com/photo-1550029402-226115b7c579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",

//     productname: "iPhone",
//     barcode: "2469723452",
//     category: "Electronic",
//     discount: "15%",
//     quantity: "43",
//   },
//   {
//     key: "6",
//     img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//     productname: "iPhone",
//     barcode: "24620783452",
//     category: "Book",
//     discount: "15%",
//     quantity: "14",
//   },
//   {
//     key: "7",
//     img: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//     productname: "iPhone",
//     barcode: "246234152",
//     category: "Electronic",
//     discount: "15%",
//     quantity: "4",
//   },
//   {
//     key: "8",
//     img: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//     productname: "Skin Care",
//     barcode: "24623134452",
//     category: "Skin Care ",
//     discount: "15%",
//     quantity: "4",
//   },
//   {
//     key: "9",
//     img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww",

//     productname: "iPhone",
//     barcode: "242423623452",
//     category: "Book",
//     discount: "15%",
//     quantity: "4",
//   },
//   {
//     key: "10",
//     img: "https://images.unsplash.com/photo-1453133451515-5ff7c1d0d63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",

//     productname: "iPhone",
//     barcode: "2462234323452",
//     category: "Electronic",
//     discount: "15%",
//     quantity: "4",
//   },
// ];

export const productsColumns = [
  {
    key: "img",
    label: "Images",
  },
  {
    key: "productname",
    label: "Product Name",
  },
  {
    key: "barcode",
    label: "Barcode",
  },
  {
    key: "category",
    label: "Category",
  },
  {
    key: "quantity",
    label: "Quantity",
  },
  {
    key: "action",
    label: "Action",
  },
];

export const dashboardCustomerColumns = [
  {
    key: "customers",
    label: "CUSTOMERS",
  },
  {
    key: "product",
    label: "Product",
  },
  {
    key: "price",
    label: "Price",
  },
  {
    key: "productRating",
    label: "Product Rating",
  },
];

export const dashboardCustomerRow = [
  {
    key: "1",
    customers: {
      img: "/images/profile.JPG",
      name: "Thanak",
      cmt: "Cool product I love 😃",
    },
    product: "Iphone 15 Pro Max",
    price: "$1000",
    productRating: "🌟🌟🌟🌟🌟",
  },
  {
    key: "2",
    customers: {
      img: "/images/profile.JPG",
      name: "Sombath",
      cmt: "This is the best product ever 😃",
    },
    product: "Ipad",
    price: "$2000",
    productRating: "🌟🌟🌟🌟🌟",
  },
  {
    key: "3",
    customers: {
      img: "/images/profile.JPG",
      name: "Pisey",
      cmt: "This is the best product ever 😃",
    },
    product: "Ipad",
    price: "$2000",
    productRating: "🌟🌟🌟🌟🌟",
  },
  {
    key: "4",
    customers: {
      img: "/images/profile.JPG",
      name: "Messi",
      cmt: "This is the best product ever 😃",
    },
    product: "Ipad",
    price: "$2000",
    productRating: "🌟🌟🌟🌟🌟",
  },
  {
    key: "4",
    customers: {
      img: "/images/profile.JPG",
      name: "Sophanit",
      cmt: "This is the best product ever 😃",
    },
    product: "Ipad",
    price: "$2000",
    productRating: "🌟🌟🌟🌟🌟",
  }
];
