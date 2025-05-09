import React from "react";
import s from "./ButtonLoadMore.module.css";

export const ButtonLoadMore = ({ onClick }) => {
  return (
    <button className={s.button} onClick={onClick} type="button">
      LOAD MORE
    </button>
  );
};
