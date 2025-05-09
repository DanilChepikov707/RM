import React from "react";
import s from "./UniCard.module.css";
import { Link } from "react-router-dom";

export const UniCard = ({
  name = "",
  type = "",
  episode = "",
  air_date = "",
}) => {
  return (
    <>
      <div className={s.card}>
        <p className={s.name}>{name}</p>
        <p className={s.type}>{type}</p>
        <p className={s.air_date}>{air_date}</p>
        <p className={s.episode}>{episode}</p>
      </div>
    </>
  );
};
