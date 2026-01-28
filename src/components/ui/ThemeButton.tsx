import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full
        bg-gray-200 dark:bg-neutral-700
        text-gray-900 dark:text-gray-100"
    >
      {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
};

export default ThemeButton;
  