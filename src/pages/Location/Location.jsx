import React, { useEffect, useState } from "react";
import { Layout } from "../../components/widjet/Layout/Layout";
import s from "./Location.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { CharactersCard } from "../../components/CharactersCard/CharactersCard";
import { LocationTitle } from "./LocatioTitle/LocationTitle";
import { Spinner } from "../../components/ui/Spinner/Spinner";
import { Cards } from "../../components/Cards/Cards";
import { Link } from "react-router-dom";
import { ButtonGoBack } from "../../components/ui/ButtonGoBack/ButtonGoBack";
import { ButtonLoadMore } from "../../components/ui/ButtonLoadMore/ButtonLoadMore";

export const Location = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const linkApi = import.meta.env.VITE_RM_API;

  useEffect(() => {
    async function getLocation() {
      try {
        const url = `${linkApi}/location/${id}`;
        const response = await fetch(url);
        const locationData = await response.json();
        setLocation(locationData);
        const residentsIds = locationData?.residents?.map(
          (el) => +el.split("/").pop()
        );
        if (locationData.error) {
          setError(true);
        }

        if (residentsIds.length > 0) {
          const url = `${linkApi}/character/${residentsIds}`;
          const response = await fetch(url);
          const characterData = await response.json();

          setCharacters(
            Array.isArray(characterData) ? characterData : [characterData]
          );
        }
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getLocation();
  }, [id]);

  console.log("loc", location);
  console.log("char", characters);

  return (
    <Layout>
      <section className={s.location}>
        <ButtonGoBack
          onClick={() => navigate(-1)}
          className={s.button_back_location}
        />

        <LocationTitle
          name={location?.name}
          type={location?.type}
          dimension={location?.dimension}
        />
        <p className={s.residents}>Residents</p>
        <Cards className={s.cards}>
          {isLoading && (
            <div className={s.spinner}>
              <Spinner />
            </div>
          )}
          {!isLoading &&
            !error &&
            characters?.map((item) => (
              <CharactersCard item={item} key={item.id} />
            ))}
          {error && <div className={s.error_message}>Ничего не найдено</div>}
        </Cards>
      </section>
    </Layout>
  );
};
