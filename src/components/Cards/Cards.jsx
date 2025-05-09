import React from "react";
import s from "./Cards.module.css";
import clsx from "clsx";

export const Cards = ({ children, className }) => {
  return <div className={clsx(s.cards, className)}>{children}</div>;
};
