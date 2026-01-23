import {useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
const ThemeButton = () => {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };    
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <MdDarkMode/>: <MdOutlineLightMode/>}
    </button>
  );
};
export default ThemeButton;

