import React, { useEffect, useState } from "react";
import s from "./Character.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../components/ui/Container/Container";
import { Layout } from "../../components/widjet/Layout/Layout";
import { CharacterAvatar } from "./components/CharacterAvatar/CharacterAvatar";
import { CharacterInfo } from "./components/CharacterInfo/CharacterInfo";
import { CharacterEpisodes } from "./components/CharacterEpisodes/CharacterEpisodes";
import { ButtonGoBack } from "../../components/ui/ButtonGoBack/ButtonGoBack";

export const Character = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const navigate = useNavigate();
  const linkApi = import.meta.env.VITE_RM_API;

  console.log(episodes);

  useEffect(() => {
    async function getCharacter() {
      try {
        const url = `${linkApi}/character/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setCharacterData(data);
        const episodesIds = data?.episode?.map((el) => +el.split("/").pop());

        if (episodesIds.length > 0) {
          const url = `${linkApi}/episode/${episodesIds}`;
          const response = await fetch(url);
          const episodesData = await response.json();
          console.log(episodesData);

          setEpisodes(
            Array.isArray(episodesData) ? episodesData : [episodesData]
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
    getCharacter();
  }, [id]);

  return (
    <Layout>
      {characterData && (
        <section className={s.wrapper}>
          <ButtonGoBack onClick={() => navigate(-1)} />
          <Container>
            <CharacterAvatar
              image={characterData.image}
              name={characterData.name}
            />
            <div className={s.wrapper_desc}>
              <CharacterInfo
                url={characterData.location.url}
                gender={characterData.gender}
                status={characterData.status}
                species={characterData.species}
                origin={characterData.origin.name}
                type={characterData.type}
                location={characterData.location.name}
              />
              <div className={s.episodes_section}>
                <h2 className={s.section_title}>Episodes</h2>
                <div className={s.episodes_list}>
                  {episodes?.map((item) => (
                    <CharacterEpisodes
                      id={item.id}
                      key={item.id}
                      episode={item.episode}
                      name={item.name}
                      air_date={item.air_date}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}
    </Layout>
  );
};
