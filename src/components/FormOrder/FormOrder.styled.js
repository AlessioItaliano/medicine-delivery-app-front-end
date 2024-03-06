import styled from "styled-components";

import { variables } from "stylesheet/variables";

import PhoneInput from "react-phone-number-input";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const InputItem = styled.input`
  width: 350px;
  padding: 18px 20px;
  font-size: 18px;

  color: ${variables.colors.primary};
  background: ${variables.colors.quinary};
  border-radius: 18px;
  border: 1px solid transparent;
`;

export const InputPhone = styled(PhoneInput)`
  width: 350px;
  padding: 18px 20px;
  font-size: 18px;

  color: ${variables.colors.primary};
  background-color: ${variables.colors.quinary};
  border-radius: 18px;
  border: 1px solid transparent;

  & input {
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    font-size: 18px;
  }
`;
