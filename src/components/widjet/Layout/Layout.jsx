import React from "react";
import s from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.layout_main}>{children}</main>
      <Footer />
    </div>
  );
};
