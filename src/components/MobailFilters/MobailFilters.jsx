import React from "react";
import s from "./MobailFilters.module.css";
import icon from "../../assets/character/close.svg";
import { FilterSelect } from "../ui/FilterSelect/FilterSelect";
import { ButtonFilters } from "../ui/ButtonFilters/ButtonFilters";

export const MobailFilters = ({
  value,
  optionsList,
  onChange,
  valueGender,
  valueStatus,
  optionsListGender,
  onChangeGender,
  optionsListStatus,
  onChangeStatus,
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
          value={value}
          optionsList={optionsList}
          onChange={onChange}
          width="281px"
        />
        <FilterSelect
          value={valueGender}
          optionsList={optionsListGender}
          onChange={onChangeGender}
          width="281px"
        />
        <FilterSelect
          value={valueStatus}
          optionsList={optionsListStatus}
          onChange={onChangeStatus}
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
