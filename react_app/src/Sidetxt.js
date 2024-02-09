import React, { useState } from "react";
import PropTypes from "prop-types";

const Sidetxt = ({ onMenuItemClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const baseStyles = `w-screen bg-[#79afe5] overflow-hidden transition-all duration-300 ease-in-out flex flex-row justify-between
${
  isSidebarOpen
    ? "h-auto p-2.5 transform translate-y-50 text-[1.25em]"
    : "h-0 p-0 transform -translate-y-full text-[0em]"
}`;
  const menuItems = ["Home", "Conf", "Paper"];

  return (
    <>
      <div className={baseStyles}>
        {menuItems.map((item) => (
          <p
            key={item}
            className={`cursor-pointer mt-2 flex-grow 
            transition-opacity duration-200 
            ease-in-out text-center 
            xs:text-[1.25em] sm:text-[1em] md:text-[1.25em] lg:text-[1.5em] xl:text-[1.75em] 2xl:text-[2em]`}
            onClick={() => onMenuItemClick(item)}
          >
            {item}
          </p>
        ))}
      </div>
      <button onClick={toggleSidebar}>🔼</button>
    </>
  );
};

Sidetxt.propTypes = {
  onMenuItemClick: PropTypes.func.isRequired,
};

export default Sidetxt;
