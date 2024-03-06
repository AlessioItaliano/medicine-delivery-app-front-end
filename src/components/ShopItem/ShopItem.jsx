import { useDispatch, useSelector } from "react-redux";
import { addToOrders } from "../../redux/order/slice";
import { selectOrders } from "../../redux/order/selectors";

import Button from "components/Button/Button";
import * as s from "./ShopItem.styled";

const ShopItem = ({ medicine }) => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  const { urlToImage, name, description, made, price, _id } = medicine;

  console.log(medicine);

  const handleAdd = () => {
    if (!orders.some((order) => order._id === _id)) {
      dispatch(addToOrders(medicine));
    }
  };

  return (
    <s.Container>
      <s.ImageContainer>
        <s.Image src={urlToImage} alt="Medicine_img"></s.Image>
      </s.ImageContainer>
      <s.Name>{name}</s.Name>
      <s.Description>{description}</s.Description>
      <s.Made>Contry: {made}</s.Made>
      <s.Price>Price: {price}</s.Price>
      <Button func={handleAdd} name="Add" type="button" />
    </s.Container>
  );
};

export default ShopItem;
