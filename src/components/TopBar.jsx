import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import logo from "../logo.svg";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <img
          src={logo}
          className="mr-2 h-[60px] w-[60px] cursor-pointer"
          alt=""
        />
        <h1 className="text-xl font-bold text-gray-700">FOF</h1>
      </div>

      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            style={20}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <p className="text-grey-700 text-sm">24/7</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone style={20} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-grey-700 text-sm">1-888-817-1234</p>
        </div>
        <button>Emergency!</button>
      </div>
    </div>
  );
};

export default TopBar;
