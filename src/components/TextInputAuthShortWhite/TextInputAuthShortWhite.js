import React from "react";

import style from "./TextInputAuthShortWhite.module.css";

const TextInputAuthShortWhite = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange
}) => {
  return (
    <div className={style.container}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        className={style.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required="required"
        autoComplete="off"
      />
    </div>
  );
};

export default TextInputAuthShortWhite;
