import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('light');

  // This is called at the initial render running only once. 
  useEffect(() => {
    // pulling the theme from localStorage
    const storedTheme = localStorage.getItem('theme');
    // if a theme is pulled it checks that it is not a null or undefined then sets the value if that is true
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // This is called every time the theme changes
  useEffect(() => {
    // this sets the theme to be put into storage. In json format because localStorage is json syntax
    localStorage.setItem('theme', theme);
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
