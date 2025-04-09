import React from "react";
import HeaderText from "./HeaderText";
import ParaText from "./ParaText";
import Trainimg2 from "/Trainimg2.jpeg";

const TrainPageHero = () => {
  return (
    <section className="w-full h-[40dvh] relative z-0">
      {/* bgimg  */}
      <div className="w-full h-full bg-center bg-no-repeat bg-cover absolute z-0">
        <div className="bg-black/40 w-full h-full backdrop-blur-md absolute z-20" />
        <img
          src={Trainimg2}
          alt="trainImg"
          className="w-full h-full object-cover z-10"
        />
      </div>

      {/* section text  */}
      <div className="h-full w-[90%] mx-auto flex flex-col gap-6 text-center md:text-start justify-center z-10 absolute inset-0 px-8">
        <HeaderText>Currently Running Trains</HeaderText>
        <ParaText>
          Real-time data of all long-distance trains currently on the move
          across Finland.
        </ParaText>
      </div>
    </section>
  );
};

export default TrainPageHero;
