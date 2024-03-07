import React from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

// TODO: Fix ThemeSwitch to actually switch between color themes maybe something here?
// https://nextui.org/docs/components/switch#switch-events

export default function ThemeSwitch() {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
    </Switch>
  );
}
