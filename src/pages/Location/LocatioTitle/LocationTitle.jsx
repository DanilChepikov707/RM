import React from "react";
import s from "./LocationTitle.module.css";

export const LocationTitle = ({ name, type, dimension }) => {
  return (
    <>
      <h2 className={s.title}>{name}</h2>
      <div className={s.sub_title_wrapper}>
        <div className={s.type_wrapper}>
          <p className={s.name}>Type</p>
          <span className={s.span}>{type}</span>
        </div>
        <div className={s.dimension_wrapper}>
          <p className={s.name}>Dimension</p>
          <span className={s.span}>{dimension}</span>
        </div>
      </div>
    </>
  );
};
