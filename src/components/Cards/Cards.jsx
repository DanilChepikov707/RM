import React from "react";
import s from "./Cards.module.css";

export const Cards = ({ children }) => {
  return (
    <div className={s.cards}>
      {children}
    </div>
  );
};