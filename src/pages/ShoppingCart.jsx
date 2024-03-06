import Section from "components/Section";
import UserOrderInfo from "components/UserOrderInfo";
import UserOrderList from "components/UserOrderList";

import * as s from "./ShoppingCart/ShoppingCart.styled";
import Button from "components/Button";

const onSubmitOrder = (e) => {
  e.preventDefault();
};

const ShoppingCart = () => {
  return (
    <>
      <Section>
        <s.Container>
          <UserOrderInfo />
          <UserOrderList />
        </s.Container>
      </Section>
      <Section>
        <s.SubmitContainer>
          <s.Title>Total price: $</s.Title>
          <Button name="Submit" type="submit" func={onSubmitOrder}></Button>
        </s.SubmitContainer>
      </Section>
    </>
  );
};

export default ShoppingCart;
