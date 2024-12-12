import { useState, useEffect } from "react";

export default function DarkThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 flex items-center transition-all duration-300"
    >
      <span
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
      <span
        className={`absolute w-full h-full flex items-center justify-center text-xs font-bold transition-opacity ${
          isDarkMode ? "opacity-100 text-white" : "opacity-0"
        }`}
      >
        🌙
      </span>
      <span
        className={`absolute w-full h-full flex items-center justify-center text-xs font-bold transition-opacity ${
          !isDarkMode ? "opacity-100 text-black" : "opacity-0"
        }`}
      >
        ☀️
      </span>
    </button>
  );
}
