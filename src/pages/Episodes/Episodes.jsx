import React from "react";
import s from "./Episodes.module.css";
import { Layout } from "../../components/widjet/Layout/Layout";
import { PageLogo } from "../../components/ui/PageLogo/PageLogo";
import pageIcon from "../../assets/episodes/episodes_logo.webp";

export const Episodes = () => {
  return (
    <Layout>
      <section className={s.wrapper}>
        <PageLogo src={pageIcon} alt="pageLogo" width={270} height={210} />
      </section>
    </Layout>
  );
};
