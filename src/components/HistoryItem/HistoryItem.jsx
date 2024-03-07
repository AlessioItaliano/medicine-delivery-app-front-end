import { format } from "date-fns";
import * as s from "./HistoryItem.styled";

const HistoryItem = ({ order }) => {
  const { totalPrice, orderList, createdAt } = order;

  const formattedDate = format(new Date(createdAt), "dd-MM-yyyy HH:mm:ss");

  return (
    <s.Container>
      <s.OrderMedicinesContainer>
        <s.List>
          {orderList.map((order) => (
            <s.Item key={order._id}>
              <s.ImageContainer>
                <s.Image src={order.urlToImage} alt="coupon_img" />
              </s.ImageContainer>
              <s.DescriptionContainer>
                <s.Description>{order.name}</s.Description>
                <s.Description>Price:{order.price}</s.Description>
              </s.DescriptionContainer>
            </s.Item>
          ))}
        </s.List>
      </s.OrderMedicinesContainer>
      <div>
        <s.Description>Total price: {totalPrice}</s.Description>
        <s.Description>Order date: {formattedDate}</s.Description>
      </div>
    </s.Container>
  );
};

export default HistoryItem;
