import { useState } from "react";
import { useSelector } from "react-redux";
import { selectOrders } from "../../redux/order/selectors";

import UserOrderItem from "components/UserOrderItem";
import * as s from "./UserOrderList.styled";

const UserOrderList = () => {
  const orders = useSelector(selectOrders);
  const [totalPrice, setTotalPrice] = useState(0);

  console.log("Загальна :", totalPrice);

  const itemTotalPrice = (price) => {
    setTotalPrice(totalPrice + price);
  };

  return (
    <s.Container>
      {orders.length === 0 ? (
        <p>You don't have any orders.</p>
      ) : (
        <s.List>
          {orders.map((order) => (
            <s.Item key={order._id}>
              <UserOrderItem
                orderMedicine={order}
                itemTotalPrice={itemTotalPrice}
              />
            </s.Item>
          ))}
        </s.List>
      )}
    </s.Container>
  );
};

export default UserOrderList;
