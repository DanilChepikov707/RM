import React from "react";
import s from "./Container.module.css";
import clsx from "clsx";

export const Container = ({ children, className }) => {
  return <div className={clsx(s.container, className)}>{children}</div>;
};
