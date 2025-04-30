import React from "react";
import s from "./Episodes.module.css";
import { Layout } from "../../components/widjet/Layout/Layout";
import { Container } from "../../components/ui/Container/Container";
import { PageLogo } from "../../components/ui/PageLogo/PageLogo";
import pageIcon from "../../assets/episodes/episodes_logo.svg";

export const Episodes = () => {
  return (
    <Layout>
      <Container>
        <section className={s.wrapper}>
          <PageLogo src={pageIcon} alt="pageLogo" width={270} height={210} />
        </section>
      </Container>
    </Layout>
  );
};
