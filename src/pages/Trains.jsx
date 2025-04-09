import React from "react";
import Navbar from "../components/Navbar";
import TrainPageHero from "../components/TrainPageHero";
import TrainPageHeroSecond from "../components/TrainPageHeroSecond";
import TrainsMap from "../components/TrainsMap";
import IndividualTrain from "../components/IndividualTrain";

const Trains = () => {
  return (
    <section className="min-h-fit w-full bg-vrgrayMid">
      <Navbar />
      <TrainPageHero />
      <TrainsMap />
      <TrainPageHeroSecond />
      <IndividualTrain />
    </section>
  );
};

export default Trains;
