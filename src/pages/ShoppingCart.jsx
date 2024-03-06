import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Section from "components/Section";
import UserOrderInfo from "components/UserOrderInfo";
import UserOrderList from "components/UserOrderList";
import Button from "components/Button";
import Loader from "components/Loader";

import { getCouponById } from "../redux/coupons/operation";
import { selectDiscount, selectIsLoading } from "../redux/coupons/selectors";

import * as s from "./ShoppingCart/ShoppingCart.styled";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const discount = useSelector(selectDiscount);
  const isLoading = useSelector(selectIsLoading);

  console.log(discount);

  const [price, setPrice] = useState(0);
  //   const [discountedPrice, setDiscountedPrice] = useState("");

  useEffect(() => {
    if (discount !== null && discount !== undefined) {
      console.log(price);
      console.log(discount);
      const calculatedDiscountedPrice = price - (price * discount) / 100;
      console.log(calculatedDiscountedPrice);
      setPrice(calculatedDiscountedPrice);
    }
  }, [discount, setPrice, price]);

  const onSubmitOrder = (e) => {
    e.preventDefault();
  };

  const shopingTotalPrice = (newPrice) => {
    console.log(newPrice);
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

              <s.Title>Total price: {price} $</s.Title>

              <Button name="Submit" type="submit" func={onSubmitOrder}></Button>
            </s.SubmitContainer>
          </Section>
        </>
      )}
    </>
  );
};

export default ShoppingCart;
