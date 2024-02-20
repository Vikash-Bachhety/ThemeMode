import React, { useContext } from "react";
import shoes from "./images/shoes.jpg";
import amazon from "./images/amazon.png";
import flipkart from "./images/flipkart.png";
import "./Content.css";
import { themeContext } from "./App";

function Content() {
  const { theme } = useContext(themeContext);

  return (
    <div className={`flex justify-around items-center max-w-screen min-h-screen ${theme === 'dark' ? 'bg-slate-900' : ''}`}>
      <div className="flex flex-col gap-6 max-w-1/4 w-1/3">
        <h1 className={`textDrop font-extrabold text-center sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl ${theme === 'dark' ? 'text-white' : ''}`}>
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className={`textScroll font-normal text-md text-justify ${theme === 'dark' ? 'text-white' : ''}`}>
          Step into style and comfort with our latest collection of shoes!
          Crafted with premium materials and designed for durability, our shoes
          offer the perfect blend of fashion and functionality.
        </p>
        <div className="flex gap-10 text-lg font-bold">
          <button className={`w-32 h-10 ${theme === 'dark' ? 'bg-cyan-600 text-white' : 'bg-red-600 text-white'}`}>
            Shop Now
          </button>
          <button className={`w-32 h-10 bg-white text-gray-500 border border-black ${theme === 'dark' ? 'border-white text-black' : ''}`}>
            category
          </button>
        </div>
        <p className={`text-sm text-gray-700 ${theme === 'dark' ? 'text-white' : ''}`}>
          Also Available On
        </p>
        <div className={`flex items-center gap-2 w-32 h-12 border rounded-full ${theme === 'dark' ? 'bg-white' : ''}`}>
          <img className="w-12 h-8" src={flipkart} alt="" />
          <img className="w-12 h-8" src={amazon} alt="" />
        </div>
      </div>
      <div>
        <img className="animate" src={shoes} alt="" />
      </div>
    </div>
  );
}

export default Content;
