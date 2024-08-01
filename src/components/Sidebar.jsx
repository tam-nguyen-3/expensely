import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiHome, FiPieChart } from "react-icons/fi";

const backBtn = () => {
  return (
    <IoIosArrowBack
      className={`h-6 w-6 text-white group-hover:text-theme-blue`}
    />
  );
};

const forwardBtn = () => {
  return (
    <IoIosArrowForward
      className={`h-6 w-6 text-white group-hover:text-theme-blue`}
    />
  );
};

const NavButton = ({ isOpen, Icon, text }) => {
  return (
    <button
      className={`group inline-flex items-center gap-4 rounded p-2 hover:bg-theme-blue-light ${isOpen ? "self-stretch" : "items-center justify-center"}`}
    >
      <Icon className="h-6 w-6 text-white group-hover:text-theme-blue" />
      {isOpen && (
        <div className="text-wh text-sm font-medium text-white group-hover:text-theme-blue">
          {text}
        </div>
      )}
    </button>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${isOpen ? "w-64 p-6" : "w-16 py-6"} inline-flex h-screen flex-col items-center justify-between bg-theme-blue transition-all duration-300`}
    >
      {/* Sidebar Header */}
      <div
        className={`${isOpen ? "justify-between" : "justify-center"} inline-flex items-center justify-center self-stretch`}
      >
        <div
          className={`${isOpen ? "" : "hidden"} text-sm font-medium text-white`}
        >
          Expensely
        </div>
        <button
          className="group flex h-9 w-9 items-center justify-center rounded p-1 hover:bg-theme-blue-light"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? backBtn() : forwardBtn()}
        </button>
      </div>

      {/* Sidebar Content */}
      <div
        className={`flex flex-col items-start ${isOpen ? "justify-start self-stretch" : "items-center justify-center"} gap-2`}
      >
        <NavButton Icon={FiHome} text="Home" isOpen={isOpen} />
        <NavButton Icon={FiPieChart} text="Report" isOpen={isOpen} />
      </div>

      {/* Sidebar Footer */}
      <div className="p-2 text-sm"></div>
    </div>
  );
};

export default Sidebar;
// {`${isOpen : 'w-64' ? 'w-16'} p-6 bg-theme-blue fixed h-screen flex-col justify-between items-center inline-flex`}
