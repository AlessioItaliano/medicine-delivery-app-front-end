import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Section from "components/Section";
import UserOrderInfo from "components/UserOrderInfo";
import UserOrderList from "components/UserOrderList";
import Button from "components/Button";
import Loader from "components/Loader";

import { getCouponById } from "../redux/coupons/operation";
import { selectDiscount, selectIsLoading } from "../redux/coupons/selectors";
import { createOrder } from "../redux/orderHistory/operation";
import { selectOrders } from "../redux/order/selectors";

import * as s from "./ShoppingCart/ShoppingCart.styled";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const discount = useSelector(selectDiscount);
  const isLoading = useSelector(selectIsLoading);
  const orders = useSelector(selectOrders);

  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  useEffect(() => {
    if (discount !== null && discount !== 0) {
      const newPrice = price - (price * discount) / 100;
      setDiscountPrice(newPrice);
    }
  }, [discount, setDiscountPrice, price]);

  const onSubmitOrder = (e) => {
    e.preventDefault();

    const orderShopPrice = discountPrice ? discountPrice : price;
    const orderShopList = orders.map((order) => order._id);

    dispatch(
      createOrder({
        totalPrice: orderShopPrice,
        orderList: orderShopList,
      })
    );
  };

  const shopingTotalPrice = (newPrice) => {
    setPrice(newPrice);
  };

  const onReadDiscount = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(getCouponById(String(form.elements.discount.value)));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Section>
            <s.Container>
              <UserOrderInfo />
              <UserOrderList shopingTotalPrice={shopingTotalPrice} />
            </s.Container>
          </Section>
          <Section>
            <s.SubmitContainer>
              <s.DiscountContainer>
                <s.Form onSubmit={onReadDiscount}>
                  <s.Input
                    type="text"
                    name="discount"
                    autoComplete="off"
                    placeholder="Put your discount here"
                  />
                  <Button name="Read" type="submit" />
                </s.Form>
              </s.DiscountContainer>

              {discountPrice ? (
                <s.Title>Price with discount: {discountPrice} $</s.Title>
              ) : (
                <s.Title>Total price: {price} $</s.Title>
              )}
              <Button name="Submit" type="submit" func={onSubmitOrder}></Button>
            </s.SubmitContainer>
          </Section>
        </>
      )}
    </>
  );
};

export default ShoppingCart;
