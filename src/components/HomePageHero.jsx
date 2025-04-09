import React from "react";

import Trainimg from "/Trainimg.jpeg";
import HeaderText from "./HeaderText";
import ParaText from "./ParaText";
import Button from "./Button";

const HomePageHero = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 py-10 h-[80vh]">
        {/* Left Section: Text Content */}
        <div className="flex flex-col justify-center items-center md:items-start gap-6 max-w-[300px] md:max-w-[550px] text-center md:text-left">
          <HeaderText>Track Trains in Real-Time</HeaderText>
          <ParaText>
            Stay updated with the latest train information on routes across
            Finland.
          </ParaText>

          <Button to="/trains">
            <p>See Current Trains</p>
          </Button>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center items-center w-full">
          <img
            src={Trainimg}
            alt="Train Image"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
