import Navbar from "./Navbar";
import Content from "./Content";
import { createContext, useState } from "react";

export const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === 'dark' ? 'dark' : ''}>
        <Navbar />
        <Content />
      </div>
    </themeContext.Provider>
  );
}

export default App;
