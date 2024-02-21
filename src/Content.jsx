import React, { useContext } from "react";
import shoes from "./images/shoes.jpg";
import amazon from "./images/amazon.png";
import flipkart from "./images/flipkart.png";
import "./Content.css";
import { themeContext } from "./App";

function Content() {
  const { theme } = useContext(themeContext);

  return (
    <div className={`xl:flex xl:flex-row flex flex-col justify-around items-center min-w-screen min-h-[85vh] xl:px-10 ${theme === 'dark' ? 'bg-slate-900' : ''}`}>
      <div className="flex flex-col gap-6 xl:w-1/4 w-4/5">
        <h1 className={`textDrop mt-5 md:mt-0 font-extrabold w-full text-center text-2xl md:text-4xl lg:text-5xl xl:text-7xl ${theme === 'dark' ? 'text-white' : ''}`}>
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className={`textScroll flex flex-wrap font-normal w-auto text-lg xl:text-md text-justify ${theme === 'dark' ? 'text-white' : ''}`}>
          Step into style and comfort with our latest collection of shoes!
          Crafted with premium materials and designed for durability, our shoes
          offer the perfect blend of fashion and functionality.
        </p>
        <div className="flex justify-center xl:justify-normal gap-10 text-lg font-bold">
          <button className={`xl:w-32 xl:h-10 xl:p-0 p-2 w-1/2 h-3/4 max-w-52 ${theme === 'dark' ? 'bg-cyan-600 text-white' : 'bg-red-600 text-white'}`}>
            Shop Now
          </button>
          <button className={`xl:w-32 xl:h-10 xl:p-0 p-2 w-1/2 h-3/4 max-w-52 bg-white text-gray-500 border border-black ${theme === 'dark' ? 'border-white text-black' : ''}`}>
            category
          </button>
        </div>
        <p className={`hidden xl:block text-xl text-gray-700 ${theme === 'dark' ? 'text-white' : ''}`}>
          Also Available On
        </p>
        <div className={`hidden xl:flex items-center gap-2 w-32 h-12 border rounded-full ${theme === 'dark' ? 'bg-white' : ''}`}>
          <img className="w-12 h-8" src={flipkart} alt="" />
          <img className="w-12 h-8" src={amazon} alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <img className="animate xl:w-auto xl:h-auto w-2/3 h-2/3" src={shoes} alt="" />
      </div>
    </div>
  );
}

export default Content;
