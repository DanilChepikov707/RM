import React from "react";
import s from "./FilterInput.module.css";
import searchIcon from "../../../assets/input/icon.svg";
import clsx from "clsx";

export const FilterInput = ({
  placeholder,
  value,
  onChange,
  size = "small",
}) => {
  return (
    <div className={s.input_wrapper}>
      <input
        type="text"
        className={clsx(
          s.input,
          size === "small" && s.input_small,
          size === "medium" && s.input_medium,
          size === "big" && s.input_big
        )}
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
