import { useDispatch } from "react-redux";

import { getMedicinesByName } from "../../redux/medicines/operation";

import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import Button from "components/Button";

import * as s from "./SearchBar.styled";

const SearchBar = () => {
  const dispatch = useDispatch();

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
    <s.Container>
      <s.Form onSubmit={handleFindByName} autoComplete="on">
        <s.Input
          type="text"
          name="medicine"
          placeholder="Quick search for medications ..."
        />
        <Button type={"submit"} name={"Find"}>
          <SearchIcon />
        </Button>
      </s.Form>
    </s.Container>
  );
};

export default SearchBar;
