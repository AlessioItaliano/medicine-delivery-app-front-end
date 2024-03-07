import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";

import "react-phone-number-input/style.css";
import * as s from "./FormOrder.styled";

const FormOrder = ({ address }) => {
  const user = useSelector(selectUser);

  const [addressInputValue, setAddressInputValue] = useState("");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [name, setName] = useState(user.name || "");

  useEffect(() => {
    if (address) {
      setAddressInputValue(address);
    }
  }, [address]);

  const handleAddressInputChange = (e) => {
    setAddressInputValue(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (value) => {
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
          maxLength={16}
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
          placeholder="Your name"
        />
      </s.Label>
    </s.Form>
  );
};

export default FormOrder;
