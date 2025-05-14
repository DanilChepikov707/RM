import React from "react";
import s from "./MobailLocationFilters.module.css";
import icon from "../../assets/character/close.svg";
import { FilterSelect } from "../ui/FilterSelect/FilterSelect";
import { ButtonFilters } from "../ui/ButtonFilters/ButtonFilters";

export const MobileLocationFilters = ({
  valueType,
  optionsListType,
  onChangeType,
  valueDimension,
  optionsListDimension,
  onChangeDimension,
  closeModal,
}) => {
  return (
    <div className={s.filters_container}>
      <div className={s.title_wrapper}>
        <p className={s.title}>Filters</p>
        <button className={s.button} onClick={closeModal}>
          <img src={icon} alt="icon" />
        </button>
      </div>
      <div className={s.filters_wrapper}>
        <FilterSelect
          value={valueType}
          optionsList={optionsListType}
          onChange={onChangeType}
          width="281px"
        />
        <FilterSelect
          value={valueDimension}
          optionsList={optionsListDimension}
          onChange={onChangeDimension}
          width="281px"
        />
      </div>
      <ButtonFilters
        title="APPLY"
        isIcon={false}
        onClick={closeModal}
        width="281px"
        height="36px"
      />
    </div>
  );
};
