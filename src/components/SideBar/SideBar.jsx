import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  getMedicinesByType,
  getMedicinesByPrice,
  getAllMedicines,
} from "../../redux/medicines/operation";

import * as s from "./SideBar.styled";
import Button from "components/Button";

const SideBar = () => {
  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(null);
  const [activePriceSort, setActivePriceSort] = useState(null);

  const handleSortByType = async (type) => {
    await dispatch(getMedicinesByType(type));
    setActivePriceSort(null);
    setActiveType(type);
  };

  const handleSortByPrice = async (priceDirection) => {
    await dispatch(getMedicinesByPrice(priceDirection));
    setActivePriceSort(priceDirection);
    setActiveType(null);
  };

  const handleClear = async () => {
    await dispatch(getAllMedicines());
    setActiveType(null);
    setActivePriceSort(null);
  };

  return (
    <s.Aside>
      <s.Title>Type of medicines:</s.Title>
      <s.List>
        <s.Item
          onClick={() => handleSortByType("gel")}
          className={activeType === "gel" ? "active" : ""}
        >
          Gel
        </s.Item>
        <s.Item
          onClick={() => handleSortByType("ointment")}
          className={activeType === "ointment" ? "active" : ""}
        >
          Ointment
        </s.Item>
        <s.Item
          onClick={() => handleSortByType("syrup")}
          className={activeType === "syrup" ? "active" : ""}
        >
          Syrup
        </s.Item>
        <s.Item
          onClick={() => handleSortByType("extract")}
          className={activeType === "extract" ? "active" : ""}
        >
          Extract
        </s.Item>
        <s.Item
          onClick={() => handleSortByType("elixir")}
          className={activeType === "elixir" ? "active" : ""}
        >
          Elixir
        </s.Item>
        <s.Item
          onClick={() => handleSortByType("emulsion")}
          className={activeType === "emulsion" ? "active" : ""}
        >
          Emulsion
        </s.Item>
        <s.Item
          onClick={() => handleSortByType("decoction")}
          className={activeType === "decoction" ? "active" : ""}
        >
          Decoction
        </s.Item>
      </s.List>
      <s.Title>Sort by price:</s.Title>
      <s.List>
        <s.Item
          onClick={() => handleSortByPrice("high")}
          className={activePriceSort === "high" ? "active" : ""}
        >
          High to Low
        </s.Item>
        <s.Item
          onClick={() => handleSortByPrice("low")}
          className={activePriceSort === "low" ? "active" : ""}
        >
          Low to High
        </s.Item>
      </s.List>
      <Button name={"Clear all filters"} func={handleClear} type={"button"} />
    </s.Aside>
  );
};

export default SideBar;
