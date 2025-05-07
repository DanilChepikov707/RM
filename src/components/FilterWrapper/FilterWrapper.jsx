import React from "react";
import s from "./FilterWrapper.module.css";

export const FilterWrapper = ({ children }) => {
  return <div className={s.filter_wrapper}>{children}</div>;
};
