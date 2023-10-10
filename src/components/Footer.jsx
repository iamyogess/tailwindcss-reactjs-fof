import React from "react";
import logo from "../logo.svg"

const Footer = () => {
  return (
    <div className="max-w-[1140px] p-4 w-full py-8 m-auto border-t-4">
      <div className="flex justify-center items-center m-auto">
      <img src={logo} className="mr-2 h-[60px] w-[60px] cursor-pointer" alt="" />
        <h1 className="text-xl font-bold text-gray-700">FOF</h1>
      </div>
    </div>
  );
};

export default Footer;
