import React, { useState } from "react";
import s from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Container } from "../../ui/Container/Container";
import { NavigationMobail } from "../../NavigationMobail/NavigationMobail";

export const Layout = ({ children }) => {
  const [isMobailMenu, setIsMobailMenu] = useState(false);

  const handleMobailMenu = () => setIsMobailMenu(!isMobailMenu);
  return (
    <div className={s.layout}>
      <Header onClick={handleMobailMenu} isBurger={isMobailMenu} />
      <main className={s.layout_main}>
        <Container>
          {isMobailMenu && <NavigationMobail />}
          {children}
        </Container>
      </main>
      {!isMobailMenu && <Footer />}
    </div>
  );
};

// доделать бургер (сделать бургер)
// делать остальные страницы
