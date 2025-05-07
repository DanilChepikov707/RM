import React from "react";
import s from "./UniCard.module.css";
import { Link } from "react-router-dom";

export const UniCard = ({ name, type, id }) => {
  return (
    <Link to={`/location/${id}`}>
      <div className={s.card}>
        <p className={s.name}>{name}</p>
        <p className={s.type}>{type}</p>
      </div>
    </Link>
  );
};
