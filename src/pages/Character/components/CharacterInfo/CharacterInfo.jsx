import React from "react";
import s from "./CharacterInfo.module.css";
import icon from "../../../../assets/character/icon.svg";
import { Link } from "react-router-dom";

export const CharacterInfo = ({
  gender,
  status,
  species,
  origin,
  type,
  location,
  url,
}) => {
  const locationId = +url.split("/").pop();
  console.log(locationId);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Informations</h2>
      <div className={s.wrapper_container}>
        <div className={s.info_item}>
          <span className={s.info_label}>Gender</span>
          <span className={s.info_value}>{gender}</span>
        </div>
        <div className={s.info_item}>
          <span className={s.info_label}>Status</span>
          <span className={s.info_value}>{status}</span>
        </div>
        <div className={s.info_item}>
          <span className={s.info_label}>Specie</span>
          <span className={s.info_value}>{species}</span>
        </div>
        <div className={s.info_item}>
          <span className={s.info_label}>Origin</span>
          <span className={s.info_value}>{origin}</span>
        </div>
        <div className={s.info_item}>
          <span className={s.info_label}>Type</span>
          <span className={s.info_value}>{type || "Unknown"}</span>
        </div>
        <Link to={`/location/${locationId}`}>
          <div className={s.info_item}>
            <button className={s.icon}>
              <img src={icon} alt="icon" />
            </button>
            <span className={s.info_label}>Location</span>
            <span className={s.info_value}>{location}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
