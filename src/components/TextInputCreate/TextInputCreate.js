import React from "react";

import style from "./TextInputCreate.module.css";

const TextInputCreate = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange
}) => {
  return (
    <>
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
    </>
  );
};

export default TextInputCreate;
