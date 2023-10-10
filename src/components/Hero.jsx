import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://cdn.britannica.com/24/197124-050-8114D15D/Woman-rice-field-Chitwan-district-Nepal-2015.jpg"
        alt="/"
        className="w-full h-full object-cover opacity-[85%]"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="flex flex-col absolute top-[40%] w-full md:-[50%] max-w-[600px] text-white p-4">
          <h1 className="font-bold text-4xl">Farmers: Our Pride, Our Lifeline, Nepal's Strength!</h1>
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
