import { motion } from "motion/react";

const BackButton = ({ children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-lg bg-vrgreenDark px-3 py-3 font-semibold text-vrgray shadow-md hover:bg-vrgreenHover"
    >
      {children}
    </motion.button>
  );
};

export default BackButton;
