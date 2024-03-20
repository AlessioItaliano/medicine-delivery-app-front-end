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
    <s.Container>
      <s.Title>Log in</s.Title>
      <s.Form onSubmit={handleSubmit} autoComplete="on">
        <s.Label>
          Email
          <s.Input type="email" name="email" autoComplete="on" />
        </s.Label>
        <s.Label>
          Password
          <s.Input type="password" name="password" autoComplete="on" />
        </s.Label>
        <s.Redirect>
          Don't have an account yet, <s.Link to="/register">Register</s.Link>
        </s.Redirect>
        <Button type={"submit"} name={"Log In"} />
      </s.Form>
    </s.Container>
  );
};

export default FormLogin;
