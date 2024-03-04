// import { useDispatch } from "react-redux";

// import {
//   getMedicinesByType,
//   getMedicinesByPrice,
//   getMedicinesByName,
// } from "../../redux/medicines/operation";

// import Button from "components/Button";

import * as s from "./UserOrderInfo.styled";
import FormOrder from "components/FormOrder";
import MapWithSearch from "../Map/Map";

const UserOrderInfo = () => {
  // const dispatch = useDispatch();

  // const handleFindByName = (e) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   console.log(form.elements.medicine.value);

  //   dispatch(
  //     getMedicinesByName({
  //       medicine: form.elements.medicine.value,
  //     })
  //   );
  // };
  return (
    <s.Container>
      <MapWithSearch />
      <FormOrder />
    </s.Container>
  );
};

export default UserOrderInfo;
