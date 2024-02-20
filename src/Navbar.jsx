import React, { useContext } from "react";
import Logo from "./images/logo.png";
import day from "./images/day.png";
import night from "./images/night.png";
import { themeContext } from "./App";

function Navbar() {
  const { theme, setTheme } = useContext(themeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`flex max-w-screen justify-around items-center h-16 ${theme === 'dark' ? 'bg-slate-900' : ''}`}>
      <div>
        <img className={`w-20 h-14 ${theme === 'dark' ? 'invert' : ''}`} src={Logo} alt="" />
      </div>
      <div>
        <ul className={`flex gap-8 list-none font-semibold ${theme === 'dark' ? 'text-white' : ''}`}>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div>
        <img onClick={toggleTheme} className="cursor-pointer w-8 h-8" src={theme === 'dark' ? day : night} alt="themeIcon" />
      </div>
      <div>
        <button className={`w-32 h-9 bg-red-600 font-bold text-white ${theme === 'dark' ? 'bg-cyan-600' : ''}`}>Login</button>
      </div>
    </div>
  );
}

export default Navbar;