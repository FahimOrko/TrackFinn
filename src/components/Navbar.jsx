import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-8  md:px-32 bg-vrgrayDark drop-shadow-md text-vrtextDark transition-all">
      {/* logo  */}
      <NavLink
        to="/"
        className={`relative font-extrabold tracking-wider uppercase hover:scale-105 hover:text-vrgreen hover:duration-300 hover:ease-in-out text-2xl md:text-xl  text-vrgreenDark 
          `}
      >
        TrackFinn
      </NavLink>

      {/* links for big screens  */}
      <ul className="hidden xl:flex items-center gap-4 font-semibold text-base tracking-wide">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 tracking-wide rounded-md font-bold uppercase hover:scale-105 text-vrtextDark hover:bg-vrgreenHover hover:duration-300 hover:ease-in-out text-base md:text-lg ${
              isActive && "bg-vrgreenDark"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/trains"
          className={({ isActive }) =>
            `p-3 tracking-wide rounded-md font-bold uppercase hover:scale-105 text-vrtextDark hover:bg-vrgreenHover hover:duration-300 hover:ease-in-out text-base md:text-lg ${
              isActive && "bg-vrgreenDark"
            }`
          }
        >
          trains
        </NavLink>
      </ul>

      {/* links for small screens  */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="h-fit w-fit ml-8 block xl:hidden items-center justify-center"
      >
        <IoMenuSharp size={24} />
      </div>

      <div
        className={`absolute xl:hidden top-24 left-0 w-full pb-2 bg-vrgrayDark flex flex-col items-center gap-4 font-semibold text-lg transfrom transition-transform ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        } `}
        style={{ transition: "transfrom 0.3s ease, opacity 0.3s ease " }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-full text-center p-4 tracking-wide rounded-md font-bold uppercase text-vrtextDark hover:bg-vrgreenHover hover:duration-300 hover:ease-in-out text-lg ${
              isActive && "bg-vrgreenDark"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/trains"
          className={({ isActive }) =>
            `w-full text-center p-4 tracking-wide rounded-md font-bold uppercase text-vrtextDark hover:bg-vrgreenHover hover:duration-300 hover:ease-in-out text-lg ${
              isActive && "bg-vrgreenDark"
            }`
          }
        >
          trains
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
