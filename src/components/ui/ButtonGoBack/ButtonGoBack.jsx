import React from "react";
import s from "./ButtonGoBack.module.css";
import iconArrow from "../../../assets/character/arrowback.svg";

export const ButtonGoBack = ({ onClick }) => {
  return (
    <button className={s.btn_back} onClick={onClick}>
      <img src={iconArrow} alt="arrow" />
      <p className={s.btn_text}>GO BACK</p>
    </button>
  );
};
