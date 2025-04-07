import React from "react";

const HeaderText = ({ children }) => {
  return (
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-vrgreen text-wrap w-fit">
      {children}
    </h1>
  );
};

export default HeaderText;
