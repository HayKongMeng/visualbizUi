import { toast, Bounce } from "react-toastify";
import { getAllShops } from "../services/shop.service";

export const setToast = (
  status = "success" || "error",
  message = "Your message",
  position = "top-center"
) => {
  if (status == "success")
    toast.success(message, {
      position,
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  else
    toast.error(message, {
      position,
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
};

// get all category in shop

export const getAllCategories = (
  allProduct = [{ category: { categoryId: 5, categoryName: "drink" } }]
) => {
  return Array.from(
    new Set(allProduct.map((product) => product?.category?.categoryName))
  );
};

// filter categories in shop
export const filterDataByCate = (
  allProduct = [{ category: { categoryId: 5, categoryName: "drink" } }],
  category = ""
) => {
  return allProduct.filter((data) =>
    data?.category?.categoryName
      .toLocaleLowerCase()
      .trim()
      .includes(category.trim().toLocaleLowerCase())
  );
};

// get Photo
export const getPhoto = (img_name = "") => {
  if (img_name?.includes("http") && img_name !== null) return img_name;
  return img_name !== null &&
    img_name?.length > 15 &&
    !img_name.includes("http")
    ? "http://localhost:8080/api/v1/files?fileName=" + img_name
    : "/dfpf.jpg";
};

export const getCateByShopType = async (type = "") => {
  if (type == "Retailers") {
    const allShops = await getAllShops();
    console.log(allShops);
  }
};
