// import { useDispatch } from "react-redux";
// import { login } from "../../redux/auth/operations";

// import Button from "components/Button";

import * as s from "./FormOrder.styled";

const FormOrder = () => {
  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     login({
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  return (
    <s.Form autoComplete="on">
      <s.Label>
        Address
        <s.Input type="address" name="address" autoComplete="on" />
      </s.Label>
      <s.Label>
        Email
        <s.Input type="email" name="email" autoComplete="on" />
      </s.Label>
      <s.Label>
        Phone
        <s.Input type="tel" name="phone" autoComplete="on" />
      </s.Label>
      <s.Label>
        Name
        <s.Input type="text" name="name" autoComplete="on" />
      </s.Label>
    </s.Form>
  );
};

export default FormOrder;
