import React from "react";
import s from "./FilterSelect.module.css";

export const FilterSelect = ({
  optionsList,
  value,
  onChange,
  width = "240px",
}) => {
  return (
    <select
      className={s.select}
      value={value}
      onChange={onChange}
      style={{ width }}
    >
      {optionsList?.map(({ value, label }) => {
        return (
          <option key={label} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};
