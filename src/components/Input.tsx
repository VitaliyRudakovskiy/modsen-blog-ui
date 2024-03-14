import React from "react";
import { forwardRef } from "react";
import { InputProps } from "../types/InputProps";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = "text", dataCy = "", ...props }, ref) => (
    <input
      className={"input"}
      placeholder={placeholder}
      type={type}
      ref={ref}
      data-cy={dataCy}
      {...props}
    />
  )
);

Input.displayName = "Input";
export default Input;
