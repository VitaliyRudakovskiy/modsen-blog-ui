import React from "react";
import LOCALES from "../constants/locales";
import { LocaleSwitcherProps } from "../types/localeSwitcherProps";

const LocaleSwitcher = ({ locale, onButtonClick }: LocaleSwitcherProps) => {
  return (
    <div className="locales">
      {LOCALES.map((currLocale) => (
        <div
          role="button"
          className={`locales__option ${currLocale === locale ? "locales__option__active" : ""}`}
          key={currLocale}
          onClick={onButtonClick(currLocale)}
          onKeyDown={onButtonClick(currLocale)}
          tabIndex={0}
          data-cy={`locale-${currLocale}`}
        >
          {currLocale}
        </div>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
