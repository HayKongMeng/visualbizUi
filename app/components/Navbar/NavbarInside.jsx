import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import MyLinks from "./Link";
import Notification from "../Notification/Notification";
import ProfilePage from "../Profile/Profile";
import AddToCart from "../AddToCart/AddToCart";
import LocationModal from "../Modal/LocationModal";
import LocationButton from "../Buttons/LocationButton";
import CountLabel from "../Labels/CountLabel";
import { getAllShops } from "@/app/services/shop.service";
import { ShoppingCart } from "lucide-react";
import { getCurrentUser } from "@/app/services/user.service";

const NavbarInside = async () => {
  const allShops = await getAllShops(1, 100);
  const user = await getCurrentUser();
  return (
    <Container className={"flex flex-col gap-sm_gap"}>
      <main className="flex justify-between items-center">
        <Link href="/" className="text-header">
          <Image
            width={1000}
            height={1000}
            alt="bell"
            src="/our-logo.PNG"
            className="w-full h-[4.5rem]  cursor-pointer object-cover"
          />
        </Link>
        <SearchBar allShops={allShops} />
        <section className="flex justify-end items-center gap-xs_gap">
          <section className="relative">
            {/* <AddToCart /> */}
            <Link href={"/view/cart"}>
              <ShoppingCart />
            </Link>

            <div className="absolute top-0 -translate-y-1/2 translate-x-1/2 right-0">
              <CountLabel />
            </div>
          </section>
          <Notification />
          <ProfilePage user={user} />
        </section>
      </main>
      <main className="flex justify-between">
        <section className="flex gap-md_gap">
          <MyLinks />
        </section>

        <LocationButton />
        <input
          type="checkbox"
          id={"my_modal_location"}
          className="modal-toggle"
        />
        <section className="modal" role="dialog">
          <section className="modal-box max-w-[60rem]">
            <LocationModal />
          </section>
        </section>
      </main>
    </Container>
  );
};

export default NavbarInside;
