import { useState, useEffect } from "react";
import { Switch } from "./ui/switch";

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
    <div onClick={toggleTheme} role="button" aria-pressed={isDarkMode} style={{ cursor: "pointer" }}>
      <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
    </div>
  );
}
