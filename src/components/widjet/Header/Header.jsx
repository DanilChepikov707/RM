import React from "react";
import s from "./Header.module.css";
import { Navigation } from "../../ui/Navigation/Navigation";
import appLogo from "../../../assets/header/logo-header.svg";
import { Container } from "../../ui/Container/Container";
import { Link } from "react-router-dom";

export const Header = ({ onClick, isBurger }) => {
  return (
    <header className={s.header}>
      <Container className={s.header_container}>
        <Link to="/">
          <img
            src={appLogo}
            alt="logo"
            className={s.logo}
            width={46}
            height={49}
          />
        </Link>
        <Navigation onClick={onClick} isBurger={isBurger} />
      </Container>
    </header>
  );
};
