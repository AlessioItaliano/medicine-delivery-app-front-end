import { useState } from "react";
import Section from "components/Section";
import UserOrderInfo from "components/UserOrderInfo";
import UserOrderList from "components/UserOrderList";

import * as s from "./ShoppingCart/ShoppingCart.styled";
import Button from "components/Button";

const ShoppingCart = () => {
  const [price, setPrice] = useState("");

  const onSubmitOrder = (e) => {
    e.preventDefault();
  };

  const shopingTotalPrice = (newPrice) => {
    setPrice(newPrice);
  };

  const onReadDiscount = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    console.log(form.elements.discount.value);
    // dispatch(
    //   login({
    //     discount: form.elements.discount.value,
    //   })
    // );
    form.reset();
  };

  return (
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
  );
};

export default ShoppingCart;
