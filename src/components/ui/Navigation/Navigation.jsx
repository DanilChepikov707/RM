import React from "react";
import s from "./Navigation.module.css";
import { links } from "./links";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import burgerMenu from "../../../assets/character/menu_burger.svg";
import closeIcon from "../../../assets/character/close_burger.svg";

export const Navigation = ({ onClick, isBurger }) => {
  return (
    <nav>
      <button className={s.button_burger} onClick={onClick} type="button">
        <img
          className={s.burger}
          src={isBurger ? closeIcon : burgerMenu}
          alt="burgerMenu"
        />
      </button>
      <ul className={s.links_list}>
        {links.map(({ id, title, path }) => (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? clsx(s.link, s.active) : s.link
              }
              to={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
