// CharacterEpisodes.jsx
import React from "react";
import s from "./CharacterEpisodes.module.css";
import icon from "../../../../assets/character/icon.svg";
import { Link } from "react-router-dom";

export const CharacterEpisodes = ({ episode, name, air_date, id }) => {
  return (
    <Link to={`/episod/${id}`}>
      <div className={s.episode_item}>
        <div className={s.episode_wrapper}>
          <span className={s.episode_code}>{episode}</span>
          <span className={s.episode_title}>{name}</span>
          <button className={s.icon}>
            <img src={icon} alt="icon" />
          </button>
        </div>
        <div className={s.episode_date}>{air_date}</div>
      </div>
    </Link>
  );
};
