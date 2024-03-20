import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import Button from "components/Button";
import "react-phone-number-input/style.css";
import * as s from "./FormRegister.styled";

const FormRegister = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        phone: phone,
      })
    );
    form.reset();
  };

  return (
    <s.Container>
      <s.Title>Sign up</s.Title>
      <s.Form onSubmit={handleSubmit} autoComplete="on">
        <s.Label>
          Username
          <s.Input type="text" name="name" required autoComplete="on" />
        </s.Label>
        <s.Label>
          Phone
          <s.InputPhone
            international
            defaultCountry="UA"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={16}
          />
        </s.Label>
        <s.Label>
          Email
          <s.Input type="email" name="email" required autoComplete="on" />
        </s.Label>
        <s.Label>
          Password
          <s.Input type="password" name="password" required autoComplete="on" />
        </s.Label>
        <s.Redirect>
          Already have an account <s.Link to="/login"> Log in</s.Link>
        </s.Redirect>
        <Button type={"submit"} name={"Register"} />
      </s.Form>
    </s.Container>
  );
};

export default FormRegister;
