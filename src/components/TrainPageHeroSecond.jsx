import React from "react";
import HeaderText from "./HeaderText";
import ParaText from "./ParaText";

const TrainPageHero = () => {
  return (
    <section className="w-full h-[40dvh] relative z-0">
      {/* bgimg  */}
      <div className="w-full h-full bg-train-img-3 bg-center bg-no-repeat bg-cover absolute z-0">
        <div className="bg-black/40 w-full h-full backdrop-blur-md absolute z-0"></div>
      </div>

      {/* section text  */}
      <div className="h-full w-[90%] mx-auto flex flex-col gap-6 text-center md:text-start justify-center z-10 absolute inset-0 px-8">
        <HeaderText>Search for Specific Trains</HeaderText>
        <ParaText>
          Find detailed information about any train by entering the type and
          number.
        </ParaText>
      </div>
    </section>
  );
};

export default TrainPageHero;
