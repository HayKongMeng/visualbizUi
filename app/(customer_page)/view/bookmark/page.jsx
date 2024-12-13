import BookmarkFilterButton from "@/app/components/Buttons/BookmarkFilterButton";
import ProductCard from "@/app/components/Cards/ProductCard";
import ProductModal from "@/app/components/Modal/ProductModal";
import { Fragment } from "react";
import {
  getAllEventsBookmark,
  getAllProductsBookmark,
  getAllServicesBookmark,
} from "@/app/services/bookmark.service";
import { EventCardV3 } from "@/app/components/Cards/FollowingCard";
import ServiceCard from "@/app/components/Cards/ServiceCard";
import ServiceModal from "@/app/components/Modal/ServiceModal";
import WrapperBookmark from "./WrapperBookmark";

async function BookmarkPage() {
  const getAllProsBookMark = await getAllProductsBookmark();
  const allEventBookmark = await getAllEventsBookmark();
  const allServices = await getAllServicesBookmark();
  return (
    <section className="w-container mx-auto py-10">
      <section className="text-semi_header font-bold my-md_margin flex items-center justify-center gap-5">
        Bookmark History
      </section>
      <WrapperBookmark
        allEventBookmark={allEventBookmark}
        allServices={allServices}
        getAllProsBookMark={getAllProsBookMark}
      />
    </section>
  );
}

export default BookmarkPage;
