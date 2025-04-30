import React from "react";
import s from "./Footer.module.css";
import { Container } from "../../ui/Container/Container";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <p className={s.footer_text}>Make with ❤️ for the MobProgramming team</p>
      </Container>
    </footer>
  );
};
