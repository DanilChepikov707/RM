import React from "react";
import s from "./PageLogo.module.css";

export const PageLogo = ({ src, width, height, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={s.page_logo}
    />
  );
};
