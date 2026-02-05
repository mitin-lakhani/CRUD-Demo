import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-2xl
        bg-gray-200 dark:bg-neutral-700
        text-gray-900 dark:text-gray-100"
    >
      {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
};
export default ThemeButton;

