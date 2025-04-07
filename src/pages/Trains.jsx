import React from "react";
import Navbar from "../components/Navbar";
import TrainPageHero from "../components/TrainPageHero";
import TrainPageHeroSecond from "../components/TrainPageHeroSecond";
import AllTrainsMap from "../components/AllTrainsMap";
import TrainsMap from "../components/TrainsMap";

const Trains = () => {
  return (
    <section className="min-h-fit w-full bg-vrgrayMid overflow-y-auto">
      <Navbar />
      <TrainPageHero />
      <TrainsMap />
      {/* <TrainPageHeroSecond /> */}
    </section>
  );
};

export default Trains;
