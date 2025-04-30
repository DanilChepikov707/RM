import React from "react";
import s from "./Locations.module.css";
import { Layout } from "../../components/widjet/Layout/Layout";
import { Container } from "../../components/ui/Container/Container";
import { PageLogo } from "../../components/ui/PageLogo/PageLogo";
import pageIcon from "../../assets/locations/locations_logo.svg";

export const Locations = () => {
  return (
    <Layout>
      <Container>
        <section className={s.wrapper}>
          <PageLogo src={pageIcon} alt="pageLogo" width={326} height={202} />
        </section>
      </Container>
    </Layout>
  );
};
