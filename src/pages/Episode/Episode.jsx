import React, { useEffect, useState } from "react";
import s from "./Episode.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "../../components/ui/Spinner/Spinner";
import { ButtonGoBack } from "../../components/ui/ButtonGoBack/ButtonGoBack";
import { Cards } from "../../components/Cards/Cards";
import { Layout } from "../../components/widjet/Layout/Layout";
import { EpisodeTitle } from "./EpisodeTitle/EpisodeTitle";
import { CharactersCard } from "../../components/CharactersCard/CharactersCard";


export const Episode = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const linkApi = import.meta.env.VITE_RM_API;

  useEffect(() => {
    async function getEpisode() {
      try {
        const url = `${linkApi}/episode/${id}`;
        const response = await fetch(url);
        const episodeData = await response.json();
        setEpisode(episodeData);
        const charactersIds = episodeData?.characters?.map(
          (el) => +el.split("/").pop()
        );

        if (episodeData.error) {
          setError(true);
        }

        if (charactersIds.length > 0) {
          const url = `${linkApi}/character/${charactersIds}`;
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
    getEpisode();
  }, [id]);

  console.log(episode);

  return (
    <Layout>
      <section className={s.episode}>
        <ButtonGoBack onClick={() => navigate(-1)} />
        <EpisodeTitle
          name={episode?.name}
          episode={episode?.episode}
          air_date={episode?.air_date}
        />
        <p className={s.cast}>Cast</p>
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

//изменить Link на кнопке Go Back на хук useNavigate
// в option добаввить все эллементы фильтра
