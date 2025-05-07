import React from "react";
import s from "./CharacterAvatar.module.css";

export const CharacterAvatar = ({image, name}) => {
  return (
    <div className={s.wrapper}>
      <img
        className={s.image}
        src={image}
        alt={name}
      />
      <h2 className={s.name}>{name}</h2>
    </div>
  );
};
