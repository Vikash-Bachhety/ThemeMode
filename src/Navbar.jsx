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
    <div className={`flex max-w-screen justify-between px-5 items-center h-16 ${theme === 'dark' ? 'bg-slate-900' : ''}`}>
      <div>
        <img className={`xl:w-20 xl:h-14 w-14 h-10 ${theme === 'dark' ? 'invert' : ''}`} src={Logo} alt="" />
      </div>
      <div>
        <ul className={`hidden xl:flex gap-8 list-none font-semibold ${theme === 'dark' ? 'text-white' : ''}`}>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div>
        <img onClick={toggleTheme} className="cursor-pointer w-8 h-8" src={theme === 'dark' ? day : night} alt="themeIcon" />
      </div>
      <div className="w-1/3 flex justify-end">
        <button className={`xl:w-32 xl:h-9 xl:p-0 px-3 py-2 w-11/12 max-w-40 h-3/4 font-bold text-white ${theme === 'dark' ? 'bg-cyan-600' : 'bg-red-600'}`}>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
