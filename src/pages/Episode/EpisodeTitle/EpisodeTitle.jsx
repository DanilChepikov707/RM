import React from "react";
import s from "./EpisodeTitle.module.css";

export const EpisodeTitle = ({ name, episode, air_date }) => {
  return (
    <>
      <h2 className={s.title}>{name}</h2>
      <div className={s.sub_title_wrapper}>
        <div className={s.type_wrapper}>
          <p className={s.name}>Episode</p>
          <span className={s.span}>{episode}</span>
        </div>
        <div className={s.dimension_wrapper}>
          <p className={s.name}>Date</p>
          <span className={s.span}>{air_date}</span>
        </div>
      </div>
    </>
  );
};
