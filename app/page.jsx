import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container";
import React from "react";
import NavbarInside from "./components/Navbar/NavbarInside";
import BodyWrapper from "./components/BodyWrapper/BodyWrapper";
import SectionButton from "./components/Section/SectionButton";
import { getAllShops } from "./services/shop.service";
import { getAllPopularShop } from "./services/popular.service";
import { getAllShopNearbyLocation } from "./services/location.service";
import { getAllPromotions } from "./services/promotion.service";

export default async function Home() {
  const allShop = await getAllShops(1, 9999);
  const allPopular = await getAllPopularShop();
  const allPromotions = await getAllPromotions(1, 999);

  // console.log(allPromotions);
  // getAllShopNearbyLocation()

  return (
    <>
      <Navbar>
        <NavbarInside />
      </Navbar>
      <Container>
        <SectionButton />
        <BodyWrapper
          allShop={allShop}
          allPopular={allPopular}
          allPromotions={allPromotions}
        />
      </Container>
      <Footer />
    </>
  );
}
