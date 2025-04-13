import React from "react";
import Navbar from "../components/Navbar";
import TrainPageHeroSecond from "../components/TrainPageHeroSecond";
import IndividualTrain from "../components/IndividualTrain";

const MyTrain = () => {
  return (
    <section className="min-h-fit w-full bg-vrgrayMid">
      <Navbar />
      <TrainPageHeroSecond />
      <IndividualTrain />
    </section>
  );
};

export default MyTrain;
