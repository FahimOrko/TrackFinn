import React from "react";
import Navbar from "../components/Navbar";
import HomePageHero from "../components/HomePageHero";

const Home = () => {
  return (
    <section className="h-[100dvh] w-full bg-vrgrayMid">
      <Navbar />
      <HomePageHero />
    </section>
  );
};

export default Home;
