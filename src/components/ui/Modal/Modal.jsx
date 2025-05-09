import React from "react";
import s from "./Modal.module.css";
import { Portal } from "../../ui/Portal/Portal";
import clsx from "clsx";

export const Modal = ({ children, className }) => {
  return (
    <Portal>
      <div className={clsx(s.modal, className)}>{children}</div>
    </Portal>
  );
};
