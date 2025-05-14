import React, { useEffect, useState } from "react";
import s from "./Locations.module.css";
import { Layout } from "../../components/widjet/Layout/Layout";
import { PageLogo } from "../../components/ui/PageLogo/PageLogo";
import pageIcon from "../../assets/locations/locations_logo.webp";
import { Cards } from "../../components/Cards/Cards";
import { UniCard } from "../../components/UniCard/UniCard";
import { FilterWrapper } from "../../components/FilterWrapper/FilterWrapper";
import { FilterInput } from "../../components/ui/FilterInput/FilterInput";
import { FilterSelect } from "../../components/ui/FilterSelect/FilterSelect";
import { useDebounce } from "../../hooks/useDebounce";
import { locationTypes, locationDimensions } from "../Characters/options";
import { ButtonLoadMore } from "../../components/ui/ButtonLoadMore/ButtonLoadMore";
import { Spinner } from "../../components/ui/Spinner/Spinner";
import { Link } from "react-router-dom";
import { ButtonFilters } from "../../components/ui/ButtonFilters/ButtonFilters";
import { Modal } from "../../components/ui/Modal/Modal";
import { MobileLocationFilters } from "../../components/MobailLocationFilters/MobailLocationFilters";

export const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [dimensionValue, setDimensionValue] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState(false);
  const [isSelect, setIsSelect] = useState(true);
  const [isModal, setIsModal] = useState(false);

  console.log("loca", locations);

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

  /*   useEffect(() => {
    setLocations([]);
    setPage(1);
  }, [debouncedSearch, typeValue, dimensionValue]); */

  useEffect(() => {
    async function getLocations() {
      setIsLoading(true);
      try {
        const url = `${linkApi}/location?name=${debouncedSearch}&type=${typeValue}&dimension=${dimensionValue}&page=${page}`;
        const response = await fetch(url);
        const locationData = await response.json();

        if (locationData.error) {
          setError(true);
        }

        if (locationData?.info?.next) {
          setHasNextPage(true);
        } else {
          setHasNextPage(false);
        }

        if (page === 1) {
          setLocations(locationData.results || []);
        } else {
          setLocations((prev) => [...prev, ...(locationData.results || [])]);
        }
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getLocations();
  }, [typeValue, debouncedSearch, dimensionValue, page, linkApi]);

  /* const locationTypes = useMemo(() => {
    // 1. Собираем уникальные типы
    const types = [...new Set(locations.map((loc) => loc.type))];
    // 2. Мапим в объекты { value, label }
    return types.map((type) => ({
      value: type,
      label: type,
    }));
  }, [locations]);

  console.log("LType", locationTypes);

  const locationDimensions = useMemo(() => {
    const dimensions = [
      ...new Set(locations.map((location) => location.dimension)),
    ];
    return dimensions.map((dimension) => ({
      value: dimension,
      label: dimension,
    }));
  }, [locations]);
 */

  const handleInput = (event) => {
    setSearchValue(event.target.value);
    if (!event.target.value) {
      setError(false);
    }
  };
  const handleType = (event) => {
    setTypeValue(event.target.value);
  };
  const handelDimension = (event) => {
    setDimensionValue(event.target.value);
  };
  const handlePage = () => setPage(page + 1);

  const handleModal = () => setIsModal(true);

  const handleHideModal = () => setIsModal(false);

  return (
    <Layout>
      <section className={s.wrapper}>
        <PageLogo src={pageIcon} alt="pageLogo" width={326} height={202} />
        <FilterWrapper>
          <FilterInput
            size="medium"
            placeholder="Filter by name..."
            value={searchValue}
            onChange={handleInput}
          />
          {isSelect && (
            <FilterSelect
              value={typeValue}
              optionsList={locationTypes}
              onChange={handleType}
            />
          )}
          {isSelect && (
            <FilterSelect
              value={dimensionValue}
              optionsList={locationDimensions}
              onChange={handelDimension}
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
            locations?.map((location) => {
              console.log(location);
              return (
                <Link to={`/location/${location.id}`} key={location.id}>
                  <UniCard
                    residents={location.residents}
                    name={location.name}
                    type={location.type}
                    id={location.id}
                  />
                </Link>
              );
            })}
          {error && <div className={s.error_message}>Ничего не найдено</div>}
        </Cards>
        {locations.length > 0 && hasNextPage && (
          <ButtonLoadMore onClick={handlePage} />
        )}
        {isModal && (
          <Modal>
            <MobileLocationFilters
              valueType={typeValue}
              optionsListType={locationTypes}
              onChangeType={handleType}
              valueDimension={dimensionValue}
              optionsListDimension={locationDimensions}
              onChangeDimension={handelDimension}
              closeModal={handleHideModal}
            />
          </Modal>
        )}
      </section>
    </Layout>
  );
};

//при клике на кнопку loadMore перебрасывает на верх страницы
