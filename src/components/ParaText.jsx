import React from "react";

const ParaText = ({ children, v2, v3 }) => {
  if (v2) return <p className="text-vrgray font-semibold">{children}</p>;

  if (v3)
    return <strong className="text-vrgreen  font-bold">{children}</strong>;

  return (
    <p className="text-sm md:text-base leading-loose text-vrtextDark text-wrap w-fit">
      {children}
    </p>
  );
};

export default ParaText;
