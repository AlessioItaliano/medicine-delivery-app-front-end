import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectOrders } from "../../redux/order/selectors";

import UserOrderItem from "components/UserOrderItem";
import * as s from "./UserOrderList.styled";

const UserOrderList = ({ shopingTotalPrice }) => {
  const orders = useSelector(selectOrders);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    shopingTotalPrice(totalPrice);
  }, [totalPrice]);

  const updateTotalPrice = (newPrice) => {
    setTotalPrice((prevTotalPrice) => {
      if (newPrice > prevTotalPrice) {
        return prevTotalPrice + (newPrice - prevTotalPrice);
      } else {
        return newPrice;
      }
    });
  };

  return (
    <s.Container>
      {orders.length === 0 ? (
        <s.EmptyContainer>
          <s.EmptyWarning>You don't have any orders.</s.EmptyWarning>{" "}
        </s.EmptyContainer>
      ) : (
        <s.List>
          {orders.map((order) => (
            <s.Item key={order._id}>
              <UserOrderItem
                orderMedicine={order}
                updateTotalPrice={updateTotalPrice}
              />
            </s.Item>
          ))}
        </s.List>
      )}
    </s.Container>
  );
};

export default UserOrderList;
