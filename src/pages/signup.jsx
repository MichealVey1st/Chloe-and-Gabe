import React from "react";
import {Button, Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon.jsx";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon.jsx";

export default function Signup() {
  const [value, setValue] = React.useState("");
  const [valuePass, setValuePass] = React.useState("");

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const validatePass = (value) => value.match('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$')

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const isInvalidPass = React.useMemo(() => {
    if (valuePass === "") return false;

    return validatePass(valuePass) ? false : true;
  }, [valuePass]);

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div id="signin">
      <Input
        value={value}
        type="email"
        label="Email"
        variant="bordered"
        placeholder="example@example.com"
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "success"}
        errorMessage={isInvalid && "Please enter a valid email"}
        onValueChange={setValue}
        className="max-w-xs"
      />
      <Input
        label="Password"
        variant="bordered"
        placeholder="Enter your password"
        errorMessage={isInvalidPass && "Please enter a valid password"}
        onValueChange={setValuePass}
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        color={isInvalidPass ? "danger" : "success"}
        className="max-w-xs"
      />
      <Button variant="ghost">
        Submit
      </Button>
    </div>
  );
}
