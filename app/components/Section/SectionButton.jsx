import Image from "next/image";
import React from "react";
import ListFilterButton from "../Buttons/ListFilterButton";
import CategoryButton from "../Buttons/CategoryButton";
import { getAllCategories } from "@/app/services/category.service";

import { MyImagesSlider } from "../Slider/Slider";

const SectionButton = async () => {
  const allCategories = await getAllCategories();
  return (
    <>
      {/* banner  */}

      <MyImagesSlider />

      {/* filter buttons  */}
      <section
        id="sec-btn"
        className="flex scroll-mt-10 gap-[1rem] mt-big_margin"
      >
        <ListFilterButton />
      </section>
      {/* categories button  */}
      <section className="mb-big_margin mt-md_margin">
        <p className="font-semibold text-[2.6rem] mb-sm_margin">Categories</p>
        <section className="relative px-[6rem box-border overflow-x-hidde">
          {/* <ButtonCateSlider side={"left"} /> */}
          <main
            id="category"
            className="relative cate-wrapper no-scrollbar w-containe mx-auto  gri flex flex-wrap jusc gap-4 grid-flow-co"
          >
            <CategoryButton
              allCategories={[{ categoryName: "All" }, ...allCategories]}
            />
          </main>
          {/* <ButtonCateSlider side={"right"} /> */}
        </section>
      </section>
    </>
  );
};

export default SectionButton;
