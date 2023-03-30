import { brands, CPU, GPU } from "constants/FilterList";
import Filter from "pages/Home/components/BrandsFilter";
import { FilterBox, StyledFilterTitle } from "pages/Home/styles";
import { useEffect, useReducer, useState } from "react";

const items = [
  {
    title: "Brands",
    filterList: brands,
  },
  {
    title: "CPU",
    filterList: CPU,
  },
  {
    title: "GPU",
    filterList: GPU,
  },
];
const initialState = {
  Brands: [],
  CPU: [],
  GPU: [],
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "Brands":
      return { ...state, Brands: action.payload };
    case "CPU":
      return { ...state, CPU: action.payload };
    case "GPU":
      return { ...state, GPU: action.payload };
    default:
      return state;
  }
};

const FilterComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(() => {
    dispatch({ type: "Brands", payload: ["Apple"] });
    console.log(state);
  }, []);
  return (
    <FilterBox>
      <StyledFilterTitle>Filter by</StyledFilterTitle>
      {items.map((item) => {
        return <Filter key={item.title} {...item} setFilter={dispatch} />;
      })}
    </FilterBox>
  );
};

export default FilterComponent;
