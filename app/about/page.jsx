"use client";
import Image from "next/image";
import React from "react";
import TeamCard from "../components/Cards/TeamCard";
import CardOffer from "../components/Cards/CardOffer";
import { dataOffers } from "../data/dataOffer";
import { motion } from "framer-motion";
import NavbarAboutUs from "../components/Navbar/NavbarAboutUs";
import { team_data } from "../data/team_data";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useStore } from "../store/store";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { HeroScrollDemo } from "../components/Hero/HeroScroll";
import { MacbookScrollDemo } from "../components/Hero/MacBookScroll";
import NewScanner from "../(seller)/seller/barcode/components/NewScanner";

const AboutUsPage = () => {
  const { aboutUsLink, setLinkAboutUs, lastTimeClick } = useStore();
  const { inView: inAboutView, ref: aboutRef } = useInView({
    threshold: 0.4,
  });
  const { inView: inTeamView, ref: teamRef } = useInView({
    threshold: 0.4,
  });
  const { inView: inOfferView, ref: offerRef } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inAboutView && Date.now() - lastTimeClick > 1000)
      setLinkAboutUs("About");
    else if (inTeamView && Date.now() - lastTimeClick > 1000)
      setLinkAboutUs("Our Team");
    else if (inOfferView && Date.now() - lastTimeClick > 1000)
      setLinkAboutUs("Provide");
  }, [inAboutView, inTeamView, inOfferView, aboutUsLink]);

  return (
    <main className="w-[90rem] mx-auto flex flex-col gap-[12rem] py-[5rem]">
      {/* <ContainerScroll /> */}
      <HeroScrollDemo />
      {/* <MacbookScrollDemo /> */}
      <section
        ref={aboutRef}
        id="about"
        className="who-we-are scroll-mt-[6.4rem] flex flex-col gap-6 items-center "
      >
        <p className="text-normal">About Us</p>
        <motion.h2
          initial={{ scaleX: 0.9, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-big_header"
        >
          E-Commerce Website in Cambodia
        </motion.h2>
        <motion.p
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="w-[50rem] text-wrap text-center text-mid"
        >
          Welcome to our e-commerce website, your one-stop destination for a
          wide range of quality products at competitive prices. We offer a
          seamless shopping experience, with an extensive selection, secure
          payment options, and fast, reliable delivery.
        </motion.p>
        <section className="grid-photo my-md_margin grid grid-cols-3 gap-md_gap">
          {linkImg.map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ y: "50px" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Image
                key={idx}
                width={1000}
                height={1000}
                alt="product img"
                priority
                src={_}
                className="h-[30rem] rounded-small"
              />
            </motion.div>
          ))}
        </section>
      </section>

      <section ref={teamRef} id="team">
        <section className="who-we-are flex flex-col gap-4 items-center my-big_margin">
          <p className="text-normal">Behind Our Platform</p>
          <h2 className="text-big_header">Our Leadership Team </h2>
          <p className="w-[50rem] text-wrap text-center text-mid">
            Working together and build a website for the future
          </p>
        </section>
        <section className="grid grid-cols-4 grid-rows-3 gap-[4.2rem] w-[90rem] mx-auto">
          {team_data.map((team, idx) => (
            <TeamCard key={idx} idx={idx + 1} info={team} />
          ))}
        </section>
      </section>

      <section
        ref={offerRef}
        id="offer"
        className="flex scroll-mt-[6.4rem] flex-col gap-big_gap"
      >
        <h3 className="text-normal_header font-medium">We Provide</h3>
        <section className="flex flex-col gap-[4.2rem]">
          {dataOffers.map((data, idx) => (
            <CardOffer key={idx} idx={idx} data={data} />
          ))}
        </section>
      </section>
    </main>
  );
};

export default AboutUsPage;

const linkImg = [
  "/images/aboutus/pic1.jpeg",
  "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=2996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
