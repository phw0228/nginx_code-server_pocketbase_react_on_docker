import React from "react";
import PropTypes from "prop-types";

const Sideicon = ({ onMenuItemClick }) => {
  const baseStyles = `bg-[#79afe5] text-[1.70em] mt-3 pb-2 overflow-hidden transition-all duration-300 ease-in-out flex flex-row justify-between sm:flex-col'`;
  const menuItems = [
    { icon: "🏠", label: "Home" },
    { icon: "⚙️", label: "Conf" },
    { icon: "📝", label: "Paper" },
  ];

  return (
    <>
      <div className={baseStyles}>
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="cursor-pointer flex-grow mt-5 transition-opacity duration-300 ease-in-out text-center"
            onClick={() => onMenuItemClick(item.label)}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </>
  );
};

Sideicon.propTypes = {
  onMenuItemClick: PropTypes.func.isRequired,
};

export default Sideicon;
