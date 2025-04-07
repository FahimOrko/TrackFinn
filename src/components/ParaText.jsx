import React from "react";

const ParaText = ({ children }) => {
  return (
    <p className="text-sm md:text-base leading-loose text-vrtextDark text-wrap w-fit">
      {children}
    </p>
  );
};

export default ParaText;
