import Button from "components/Button/Button";
import * as s from "./ShopItem.styled";

const ShopItem = ({ medicine }) => {
  const { urlToImage, name, description, made, type, price } = medicine;

  const handleClick = () => {
    console.log("click");
  };
  return (
    <s.Container>
      <s.ImageContainer>
        <s.Image src={urlToImage} alt="Medicine_img"></s.Image>
      </s.ImageContainer>
      <s.Name>{name}</s.Name>
      <s.Description>{description}</s.Description>
      <s.Made>{made}</s.Made>
      <s.Type>{type}</s.Type>
      <s.Price>{price}</s.Price>
      <Button func={handleClick} name="Add" type="button" />
    </s.Container>
  );
};

export default ShopItem;
