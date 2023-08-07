import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="flex flex-col absolute top-[40%] w-full md:-[50%] max-w-[600px] text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            non dicta ipsum facilis voluptas! Sed atque itaque pariatur maxime
            quae. Ducimus a iste facere assumenda cupiditate vitae laboriosam
            sapiente officia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
