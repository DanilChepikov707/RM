import React from "react";
import s from "./ButtonGoBack.module.css";
import iconArrow from "../../../assets/character/arrowback.svg";
import clsx from "clsx";

export const ButtonGoBack = ({ onClick, className }) => {
  return (
    <button className={clsx(s.btn_back, className)} onClick={onClick}>
      <img src={iconArrow} alt="arrow" />
      <p className={s.btn_text}>GO BACK</p>
    </button>
  );
};
