import { useDispatch } from "react-redux";

import {
  getMedicinesByType,
  getMedicinesByPrice,
  getMedicinesByName,
} from "../../redux/medicines/operation";

import Button from "components/Button";

import * as s from "./SideBar.styled";

const SideBar = () => {
  const dispatch = useDispatch();

  const handleSortByType = async (type) => {
    await dispatch(getMedicinesByType(type));
  };

  const handleSortByPrice = async (priceDirection) => {
    await dispatch(getMedicinesByPrice(priceDirection));
  };

  const handleFindByName = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.medicine.value);

    dispatch(
      getMedicinesByName({
        medicine: form.elements.medicine.value,
      })
    );
  };
  return (
    <s.Aside>
      <s.Form onSubmit={handleFindByName} autoComplete="on">
        <s.Input type="text" name="medicine" placeholder="Enter the medicine" />
        <Button type={"submit"} name={"Find"} />
      </s.Form>
      <s.Title>Type of medicines:</s.Title>
      <s.List>
        <s.Item>
          <Button
            type={"button"}
            name={"Gel"}
            func={() => handleSortByType("gel")}
          />
        </s.Item>
        <s.Item>
          <Button
            type={"button"}
            name={"Ointment"}
            func={() => handleSortByType("ointment")}
          />
        </s.Item>
        <s.Item>
          <Button
            type={"button"}
            name={"Syrup"}
            func={() => handleSortByType("syrup")}
          />
        </s.Item>
        <s.Item>
          <Button
            type={"button"}
            name={"Extract"}
            func={() => handleSortByType("extract")}
          />
        </s.Item>
        <s.Item>
          <Button
            type={"button"}
            name={"Elixir"}
            func={() => handleSortByType("elixir")}
          />
        </s.Item>
        <s.Item>
          <Button
            type={"button"}
            name={"Emulsion"}
            func={() => handleSortByType("emulsion")}
          />
        </s.Item>
        <s.Item>
          <Button
            type={"button"}
            name={"Decoction"}
            func={() => handleSortByType("decoction")}
          />
        </s.Item>
      </s.List>
      <s.Title>Sort by price:</s.Title>
      <Button
        type="button"
        name={"High to Low"}
        func={() => handleSortByPrice("higt")}
      />
      <Button
        type="button"
        name={"Low to High"}
        func={() => handleSortByPrice("low")}
      />
    </s.Aside>
  );
};

export default SideBar;
