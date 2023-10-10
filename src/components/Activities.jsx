import React from "react";
import {Link} from "react-router-dom"
const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:grid grid-cols-3 mt-[-75px]" id="prices">

      <div className="relative p-4 duration-300 hover:scale-105">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
          Potato
        </h3>
        <h4 className="absolute z-10 top-[70%] left-[40%] translate-x-[-10%] translate-y-[-50%] text-white font-bold text-2xl">Rs 40 per kg</h4>
       
       {/* <Link to="/"> */}
       <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg "
          src="https://cdn7.dissolve.com/p/D145_285_439/D145_285_439_1200.jpg"
          alt="/"
        />
       {/* </Link> */}
      </div>

      <div className="relative p-4 duration-300 hover:scale-105">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
          Onion
        </h3>
        <h4 className="absolute z-10 top-[70%] left-[40%] translate-x-[-10%] translate-y-[-50%] text-white font-bold text-2xl">Rs 32 per kg</h4>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4Paxpdr17av9zyJVPPAT7CbfytmCMS5FTg&usqp=CAU"
          alt="/"
        />
      </div>

      <div className="relative p-4 duration-300 hover:scale-105">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
          Chilly
        </h3>
        <h4 className="absolute z-10 top-[70%] left-[40%] translate-x-[-10%] translate-y-[-50%] text-white font-bold text-2xl">Rs 15 per kg</h4>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4TFvTcBnP73s4WLF6uoZr8YnXXjGsc0HtA&usqp=CAU"
          alt="/"
        />
      </div>
      <div className="relative p-4 duration-300 hover:scale-105">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
          Carrot
        </h3>
        <h4 className="absolute z-10 top-[70%] left-[40%] translate-x-[-10%] translate-y-[-50%] text-white font-bold text-2xl">Rs 32 per kg</h4>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdqwWts0jMyY8M_fM7WiPPwlRlUnfrXWLxw&usqp=CAU"
          alt="/"
        />
      </div>
      <div className="relative p-4 duration-300 hover:scale-105">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
          Garlic
        </h3>
        <h4 className="absolute z-10 top-[70%] left-[40%] translate-x-[-10%] translate-y-[-50%] text-white font-bold text-2xl">Rs 32 per kg</h4>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrUDcWSciMMMkK8f7CzmaixbEsTZSQ9MS4Q&usqp=CAU"
          alt="/"
        />

      </div>
      <div className="relative p-4 duration-300 hover:scale-105">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl">
          Ginger
        </h3>
        <h4 className="absolute z-10 top-[70%] left-[40%] translate-x-[-10%] translate-y-[-50%] text-white font-bold text-2xl">Rs 35 per kg</h4>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1og1xl_-MRFAwShgP4ZkW5hp9HqU1cssRQ&usqp=CAU"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Activities;
