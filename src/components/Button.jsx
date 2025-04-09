import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Button = ({ type, onClick, to, children }) => {
  if (type === "submit") {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 uppercase bg-vrgreenDark hover:bg-vrgreenHover text-vrtextDark font-bold rounded-md w-fit sm:w-auto flex justify-center items-center transition-all duration-300 ease-in-out"
      >
        {children}
      </motion.button>
    );
  }

  if (to && !type)
    return (
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to={to}
          className="px-6 py-3 uppercase bg-vrgreenDark hover:bg-vrgreenHover text-vrtextDark font-bold rounded-md w-fit sm:w-auto flex justify-center items-center transition-all duration-300 ease-in-out"
        >
          {children}
        </Link>
      </motion.button>
    );

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 uppercase bg-vrgreenDark hover:bg-vrgreenHover text-vrtextDark font-bold rounded-md w-fit sm:w-auto flex justify-center items-center transition-all duration-300 ease-in-out"
    >
      {children}
    </motion.button>
  );
};

export default Button;
