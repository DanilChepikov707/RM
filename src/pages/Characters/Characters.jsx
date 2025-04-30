import React from "react";
import s from "./Characters.module.css";
import { Layout } from "../../components/widjet/Layout/Layout";
import { Container } from "../../components/ui/Container/Container";
import { PageLogo } from "../../components/ui/PageLogo/PageLogo";
import pageIcon from "../../assets/character/cheracters_logo.svg";

export const Characters = () => {
  return (
    <Layout>
      <Container>
        <section className={s.wrapper}>
          <PageLogo src={pageIcon} alt="pageLogo" width={600} height={200} />
        </section>
      </Container>
    </Layout>
  );
};
