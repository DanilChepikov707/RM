import React from "react";
import { Layout } from "../../components/widjet/Layout/Layout";
import s from "./Location.module.css";
import { useParams } from "react-router-dom";

export const Location = () => {
  const { id } = useParams();
  return (
    <Layout>
      <section className={s.location}>location: {id}</section>
    </Layout>
  );
};
