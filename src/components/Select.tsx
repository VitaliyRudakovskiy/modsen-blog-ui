import React from "react";
import contactOptions from "../constants/contactOptions";

const Select = ({ ...props }) => {
  return (
    <select {...props} className="form__select">
      {contactOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
