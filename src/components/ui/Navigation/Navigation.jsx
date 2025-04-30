import React from "react";
import s from "./Navigation.module.css";
import { links } from "./links";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul className={s.links_list}>
        {links.map(({ id, title, path }) => (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.link} ${s.active}` : s.link
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
