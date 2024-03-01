// import ShopItem from "components/ShopItem";

import * as s from "./ShopList.styled";

const ShopList = ({ medicines }) => {
  return (
    <s.Container>
      {/* {medicines.map((medicine) => (
        <s.Item key={medicine.id}>
          <ShopItem medicine={medicine} />
        </s.Item>
      ))} */}
      <p>Shoplist</p>
    </s.Container>
  );
};

export default ShopList;
