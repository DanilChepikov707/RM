import React from "react";
import s from "./FilterInput.module.css";
import searchIcon from "../../../assets/input/icon.svg";

export const FilterInput = ({ placeholder, value, onChange }) => {
  return (
    <div className={s.input_wrapper}>
      <input
        type="text"
        className={s.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button className={s.input_icon}>
        <img src={searchIcon} alt="icon" />
      </button>
    </div>
  );
};
