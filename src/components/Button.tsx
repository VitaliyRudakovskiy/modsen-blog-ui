import React from "react";
import { ButtonProps } from "../types/buttonProps";
import buttonVariants from "../constants/buttonVariants";

const Button = ({
  variant,
  type = "button",
  disabled = false,
  dataCy = "",
  children,
  onClick,
}: ButtonProps) => {
  const className = `button ${buttonVariants[variant]}`;

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-cy={dataCy}
    >
      {children}
    </button>
  );
};

export default Button;
