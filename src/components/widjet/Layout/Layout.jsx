import React from "react";
import s from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Container } from "../../ui/Container/Container";

export const Layout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.layout_main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
