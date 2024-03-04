import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import Button from "components/Button";

import * as s from "./FormRegister.styled";

const FormRegister = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <s.Form onSubmit={handleSubmit} autoComplete="on">
      <s.Label>
        Username
        <s.Input type="text" name="name" required autoComplete="on" />
      </s.Label>
      <s.Label>
        Email
        <s.Input type="email" name="email" required autoComplete="on" />
      </s.Label>
      <s.Label>
        Password
        <s.Input type="password" name="password" required autoComplete="on" />
      </s.Label>
      <Button type={"submit"} name={"Register"} />
    </s.Form>
  );
};

export default FormRegister;
