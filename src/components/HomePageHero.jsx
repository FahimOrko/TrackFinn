import React from "react";
import { Link } from "react-router-dom";
import Trainimg from "/Trainimg.jpeg";

const HomePageHero = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 py-10 h-[80vh]">
        {/* Left Section: Text Content */}
        <div className="flex flex-col justify-center items-center md:items-start gap-6 max-w-[300px] md:max-w-[550px] text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-vrgreen">
            Track Trains in Real-Time
          </h1>
          <p className="text-sm md:text-base leading-loose text-vrtextDark">
            Stay updated with the latest train information on routes across
            Finland.
          </p>
          <Link
            to="/trains"
            className="px-6 py-3 bg-vrgreenDark hover:bg-vrgreenHover text-vrtextDark font-bold rounded-md w-full sm:w-auto flex justify-center items-center transition-all duration-300 ease-in-out"
          >
            <p className="uppercase">See Current Trains</p>
          </Link>
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
