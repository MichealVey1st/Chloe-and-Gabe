import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useDarkMode } from 'usehooks-ts';

export default function ThemeSwitch() {
  const { isDarkMode, toggle } = useDarkMode()

  const handleToggle = () => {
    console.log("Before toggle:", isDarkMode);
    toggle();
    console.log("After toggle:", !isDarkMode);
  };

  localStorage.
  
  return (
    <Switch
      defaultSelected={isDarkMode} // Switch should be 'on' when isDarkMode is true
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={handleToggle}
    />
  );
}
