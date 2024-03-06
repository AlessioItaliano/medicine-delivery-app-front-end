import React, { useState } from "react";
import Map from "components/Map";
import FormOrder from "components/FormOrder";
import fetchAddressFromCoordinates from "./coordinatesChange";

import * as s from "./UserOrderInfo.styled";

const UserOrderInfo = () => {
  const [address, setAddress] = useState(null);

  const handleCoordinatesChange = async (newCoordinates) => {
    const getAddress = await fetchAddressFromCoordinates(newCoordinates);
    setAddress(getAddress);
  };

  return (
    <s.Container>
      <Map onCoordinatesChange={handleCoordinatesChange} />
      <FormOrder address={address} />
    </s.Container>
  );
};

export default UserOrderInfo;
