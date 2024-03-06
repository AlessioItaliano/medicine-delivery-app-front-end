import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromOrders } from "../../redux/order/slice";
import { selectOrders } from "../../redux/order/selectors";
import Button from "components/Button/Button";
import * as s from "./UserOrderItem.styled";

const UserOrderItem = ({ orderMedicine, itemTotalPrice }) => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  const { urlToImage, name, price, _id } = orderMedicine;

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  console.log(totalPrice);

  // useEffect(() => {
  //   itemTotalPrice(price);
  // }, [quantity]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * price);
  };

  const handleRemove = () => {
    const index = orders.findIndex((order) => order._id === _id);
    if (index !== -1) {
      const removedOrder = orders[index];
      const removedTotalPrice = removedOrder.price * removedOrder.quantity;
      itemTotalPrice(-removedTotalPrice);
      dispatch(removeFromOrders(removedOrder));
    }
  };

  return (
    <s.Container>
      <s.ImageContainer>
        <s.Image src={urlToImage} alt="Medicine_img" />
      </s.ImageContainer>
      <s.DescriptionContainer>
        <s.Name>{name}</s.Name>
        <s.Price>Price: {price}</s.Price>
        <s.Input
          type="number"
          name="quantity"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Button func={handleRemove} name="Remove" type="button" />
      </s.DescriptionContainer>
    </s.Container>
  );
};

export default UserOrderItem;
