import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { login } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
// import Button from "components/Button";
import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

import * as s from "./FormOrder.styled";

const FormOrder = ({ address }) => {
  const user = useSelector(selectUser);

  const [addressInputValue, setAddressInputValue] = useState("");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState(user.name || "");

  useEffect(() => {
    if (address) {
      setAddressInputValue(address);
    }
  }, [address]);

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

  const handleAddressInputChange = (e) => {
    setAddressInputValue(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (value) => {
    // console.log(e.tarhet.value);
    setPhone(value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <s.Form autoComplete="on">
      <s.Label>
        Address
        <s.InputItem
          type="text"
          name="address"
          autoComplete="on"
          value={addressInputValue}
          onChange={handleAddressInputChange}
        />
      </s.Label>
      <s.Label>
        Email
        <s.InputItem
          type="email"
          name="email"
          autoComplete="on"
          value={email}
          onChange={handleEmailChange}
          placeholder="exemple@gmail.com"
        />
      </s.Label>
      <s.Label>
        Phone
        <s.InputPhone
          international
          defaultCountry="UA"
          value={phone}
          onChange={handlePhoneChange}
        />
      </s.Label>
      <s.Label>
        Name
        <s.InputItem
          type="text"
          name="name"
          autoComplete="on"
          value={name}
          onChange={handleNameChange}
        />
      </s.Label>
    </s.Form>
  );
};

export default FormOrder;
