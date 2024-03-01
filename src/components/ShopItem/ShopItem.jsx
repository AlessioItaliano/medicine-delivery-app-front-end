import Button from "components/Button/Button";
import * as s from "./ShopItem.styled";

const ShopItem = ({ medicine }) => {
  const { urlToImage, name, description, made, type, price } = medicine;

  return (
    <s.Container>
      <s.Img>{urlToImage}</s.Img>
      <s.Name>{name}</s.Name>
      <s.Description>{description}</s.Description>
      <s.Made>{made}</s.Made>
      <s.Type>{type}</s.Type>
      <s.Price>{price}</s.Price>
      <Button handle={console.log("click")} name="Add" type="button" />
    </s.Container>
  );
};

export default ShopItem;
