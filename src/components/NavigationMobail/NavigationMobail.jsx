import React from "react";
import s from "./NavigationMobail.module.css";
import { links } from "../ui/Navigation/links";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const NavigationMobail = () => {
  return (
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
  );
};
