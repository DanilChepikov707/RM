import React from "react";
import s from "./ButtonFilters.module.css";
import iconFilter from "../../../assets/character/filter_icon.svg";

export const ButtonFilters = ({
  onClick,
  title = "ADVANCED FILTERS",
  isIcon = true,
  width = "312px",
  height = "56px",
}) => {
  return (
    <button
      className={s.button}
      style={{
        justifyContent: isIcon ? "flex-start" : "center",
        width,
        height,
      }}
      onClick={onClick}
      type="button"
    >
      {isIcon && <img src={iconFilter} alt="iconFilter" />}
      <span className={s.title}>{title}</span>
    </button>
  );
};
