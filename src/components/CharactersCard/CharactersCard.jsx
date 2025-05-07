import React from "react";
import s from "./CharactersCard.module.css";
import { Link } from "react-router-dom";

export const CharactersCard = ({ item }) => {
  const { image, name, species, id } = item;
  return (
    <Link to={`/character/${id}`}>
      <div className={s.card}>
        <div className={s.image_wrapper}>
          <img src={image} alt={name} />
        </div>
        <div className={s.text_wrapper}>
          <p className={s.name} title={name}>
            {name}
          </p>
          <p className={s.species}>{species}</p>
        </div>
      </div>
    </Link>
  );
};
