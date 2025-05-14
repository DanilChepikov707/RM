import React, { useEffect, useState } from "react";
import s from "./Characters.module.css";
import { Layout } from "../../components/widjet/Layout/Layout";
import { PageLogo } from "../../components/ui/PageLogo/PageLogo";
import pageIcon from "../../assets/character/pageLogo.webp";
import { FilterInput } from "../../components/ui/FilterInput/FilterInput";
import { FilterSelect } from "../../components/ui/FilterSelect/FilterSelect";
import { statusOptions } from "./options";
import { genderOptions } from "./options";
import { speciesOptions } from "./options";
import { FilterWrapper } from "../../components/FilterWrapper/FilterWrapper";
import { Cards } from "../../components/Cards/Cards";
import { CharactersCard } from "../../components/CharactersCard/CharactersCard";
import { ButtonLoadMore } from "../../components/ui/ButtonLoadMore/ButtonLoadMore";
import { useDebounce } from "../../hooks/useDebounce";
import { Spinner } from "../../components/ui/Spinner/Spinner";
import { ButtonFilters } from "../../components/ui/ButtonFilters/ButtonFilters";
import { Modal } from "../../components/ui/Modal/Modal";
import { MobailFilters } from "../../components/MobailFilters/MobailFilters";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSelect, setIsSelect] = useState(true);
  const [isModal, setIsModal] = useState(false);

  console.log("char", characters);

  const debouncedSearch = useDebounce(searchValue, 500);
  const linkApi = import.meta.env.VITE_RM_API;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1070) {
        setIsSelect(false);
      } else {
        setIsSelect(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    async function getCharacters() {
      try {
        const url = `${linkApi}/character?name=${debouncedSearch}&species=${speciesFilter}&gender=${genderFilter}&status=${statusFilter}&page=${page}`;
        const response = await fetch(url);
        const characterData = await response.json();
        console.log(characterData);

        if (characterData.error) {
          setError(true);
        }

        if (characterData?.info?.next) {
          setHasNextPage(true);
        } else {
          setHasNextPage(false);
        }

        if (page === 1) {
          setCharacters(characterData.results || []);
        } else {
          setCharacters((prev) => [...prev, ...(characterData.results || [])]);
        }
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCharacters();
  }, [
    debouncedSearch,
    speciesFilter,
    genderFilter,
    statusFilter,
    page,
    linkApi,
  ]);

  console.log(characters);

  const handleInput = (event) => {
    setSearchValue(event.target.value);
    if (!event.target.value) {
      setError(false);
    }
  };
  const handleSpeciesFilter = (event) => {
    setSpeciesFilter(event.target.value);
  };
  const handleGenderFilter = (event) => {
    setGenderFilter(event.target.value);
  };
  const handleStatusFilter = (event) => {
    setStatusFilter(event.target.value);
  };
  const handlePage = () => setPage(page + 1);

  const handleModal = () => setIsModal(true);

  const handleHideModal = () => setIsModal(false);

  const arrNumbers = [];
  let count = 0;
  while (count <= 10) {
    arrNumbers.push(count);
    count++;
  }

  return (
    <Layout>
      <section className={s.wrapper}>
        <PageLogo src={pageIcon} alt="pageLogo" width={600} height={200} />
        <FilterWrapper>
          <FilterInput
            size="small"
            placeholder="Filter by name..."
            value={searchValue}
            onChange={handleInput}
          />
          {isSelect && (
            <FilterSelect
              value={speciesFilter}
              optionsList={speciesOptions}
              onChange={handleSpeciesFilter}
            />
          )}
          {isSelect && (
            <FilterSelect
              value={genderFilter}
              optionsList={genderOptions}
              onChange={handleGenderFilter}
            />
          )}
          {isSelect && (
            <FilterSelect
              value={statusFilter}
              optionsList={statusOptions}
              onChange={handleStatusFilter}
            />
          )}
          {!isSelect && <ButtonFilters onClick={handleModal} />}
        </FilterWrapper>
        <Cards>
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
        {characters.length > 0 && hasNextPage && (
          <ButtonLoadMore onClick={handlePage} />
        )}
        {isModal && (
          <Modal>
            <MobailFilters
              value={speciesFilter}
              optionsList={speciesOptions}
              onChange={handleSpeciesFilter}
              valueGender={genderFilter}
              optionsListGender={genderOptions}
              onChangeGender={handleGenderFilter}
              valueStatus={statusFilter}
              optionsListStatus={statusOptions}
              onChangeStatus={handleStatusFilter}
              closeModal={handleHideModal}
            />
          </Modal>
        )}
      </section>
    </Layout>
  );
};
