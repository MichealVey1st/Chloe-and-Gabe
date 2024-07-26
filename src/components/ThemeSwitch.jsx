import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme)); // Convert theme to JSON string
    document.body.classList.replace(localStorage.getItem('theme'), theme);
  }, [theme]);

  // called when the switch is toggled to state the value of dark mode. Then it sends that value to the setTheme hook to be stored in localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "red-dark" : "light";
    setTheme(newTheme);
  };
  
  return (
    <Switch
      checked={theme === "light"}
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={toggleTheme}
    />
  );
}
