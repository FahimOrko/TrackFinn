import React from "react";

const HeaderText = ({ h2, children }) => {
  if (!h2)
    return (
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-vrgreen text-wrap w-full">
        {children}
      </h1>
    );

  if (h2)
    return (
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-vrgreen text-wrap w-fit">
        {children}
      </h2>
    );
};

export default HeaderText;
