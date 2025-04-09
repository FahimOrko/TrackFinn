import React from "react";
import DummyMapImg from "/DummyMapImg.jpg";
import HeaderText from "./HeaderText";

const TrainNotAvaiable = ({ children }) => {
  return (
    <>
      <div className="w-full h-full bg-center bg-no-repeat bg-cover absolute z-0">
        <div className="bg-black/60 w-full h-full backdrop-blur-md absolute z-20" />
        <img
          src={DummyMapImg}
          alt="trainImg"
          className="w-full h-full object-cover z-10"
        />
      </div>
      <div className="h-full w-[90%] flex flex-col text-center md:text-start justify-center z-10 absolute inset-0 px-8 items-center">
        <HeaderText h2={true}>{children}</HeaderText>
      </div>
    </>
  );
};

export default TrainNotAvaiable;
