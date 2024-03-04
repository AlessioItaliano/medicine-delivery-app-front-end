import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

import Button from "components/Button";

import * as s from "./FormLogin.styled";

const FormLogin = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <s.Form onSubmit={handleSubmit} autoComplete="off">
      <s.Label>
        Email
        <s.Input type="email" name="email" autoComplete="off" />
      </s.Label>
      <s.Label>
        Password
        <s.Input type="password" name="password" autoComplete="off" />
      </s.Label>
      <Button type={"submit"} name={"Log In"} />
    </s.Form>
  );
};

export default FormLogin;
