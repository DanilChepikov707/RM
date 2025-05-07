import React from "react";
import s from "./Navigation.module.css";
import { links } from "./links";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export const Navigation = () => {
  return (
    <nav>
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
