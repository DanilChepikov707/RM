import React, { useEffect, useState } from "react";
import s from "./Character.module.css";
import { useParams } from "react-router-dom";
import { Container } from "../../components/ui/Container/Container";
import { Layout } from "../../components/widjet/Layout/Layout";
import { CharacterAvatar } from "./components/CharacterAvatar/CharacterAvatar";
import { CharacterInfo } from "./components/CharacterInfo/CharacterInfo";
import { CharacterEpisodes } from "./components/CharacterEpisodes/CharacterEpisodes";
import iconArrow from "../../assets/character/arrowback.svg";
import { Link } from "react-router-dom";

export const Character = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  console.log(episodes);

  useEffect(() => {
    async function getCharacter() {
      try {
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setCharacterData(data);
        const episodesIds = data?.episode?.map((el) => +el.split("/").pop());

        if (episodesIds.length > 0) {
          const url = `https://rickandmortyapi.com/api/episode/${episodesIds}`;

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
          <Link to={'/'}>
            <button className={s.btn_back}>
              <img src={iconArrow} alt="arrow" />
              <p className={s.btn_text}>GO BACK</p>
            </button>
          </Link>
          <Container>
            <CharacterAvatar
              image={characterData.image}
              name={characterData.name}
            />
            <div className={s.wrapper_desc}>
              <CharacterInfo
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
