import React, { useEffect, useState } from "react";
import s from "./Episodes.module.css";
import { Layout } from "../../components/widjet/Layout/Layout";
import { PageLogo } from "../../components/ui/PageLogo/PageLogo";
import pageIcon from "../../assets/episodes/episodes_logo.webp";
import { Cards } from "../../components/Cards/Cards";
import { UniCard } from "../../components/UniCard/UniCard";
import { Spinner } from "../../components/ui/Spinner/Spinner";
import { ButtonLoadMore } from "../../components/ui/ButtonLoadMore/ButtonLoadMore";
import { FilterWrapper } from "../../components/FilterWrapper/FilterWrapper";
import { FilterInput } from "../../components/ui/FilterInput/FilterInput";
import { useDebounce } from "../../hooks/useDebounce";
import { Link } from "react-router-dom";

export const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearch = useDebounce(searchValue, 500);
  const linkApi = import.meta.env.VITE_RM_API;

  useEffect(() => {
    setEpisodes([]);
    setPage(1);
  }, [debouncedSearch]);

  useEffect(() => {
    async function getEpisodes() {
      setIsLoading(true);
      try {
        const url = `${linkApi}/episode?name=${debouncedSearch}&page=${page}`;
        const response = await fetch(url);
        const episodeData = await response.json();

        if (episodeData.error) {
          setError(true);
        }

        if (episodeData?.info?.next) {
          setHasNextPage(true);
        } else {
          setHasNextPage(false);
        }

        if (page === 1) {
          setEpisodes(episodeData.results || []);
        } else {
          setEpisodes((prev) => [...prev, ...(episodeData.results || [])]);
        }
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getEpisodes();
  }, [debouncedSearch, page]);

  const handlePage = () => setPage(page + 1);

  const handleInput = (event) => {
    setSearchValue(event.target.value);
    if (!event.target.value) {
      setError(false);
    }
  };

  return (
    <Layout>
      <section className={s.wrapper}>
        <PageLogo src={pageIcon} alt="pageLogo" width={270} height={210} />
        <FilterWrapper>
          <FilterInput
            size="big"
            placeholder="Filter by name or episode (ex. S01 or S01E02)"
            value={searchValue}
            onChange={handleInput}
          />
        </FilterWrapper>
        <Cards>
          {isLoading && (
            <div className={s.spinner}>
              <Spinner />
            </div>
          )}
          {!isLoading &&
            !error &&
            episodes?.map((episode) => (
              <Link to={`/episod/${episode.id}`}>
                <UniCard
                  name={episode.name}
                  id={episode.id}
                  key={episode.id}
                  air_date={episode.air_date}
                  episode={episode.episode}
                />
              </Link>
            ))}
          {error && <div className={s.error_message}>Ничего не найдено</div>}
        </Cards>
        {episodes.length > 0 && hasNextPage && (
          <ButtonLoadMore onClick={handlePage} />
        )}
      </section>
    </Layout>
  );
};

//страницы locatoin и episode
//
