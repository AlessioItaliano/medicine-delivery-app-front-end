import styled from "styled-components";

import PhoneInput from "react-phone-number-input";

import { variables } from "stylesheet/variables";

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

  border-radius: 3px;
  border: 1px solid ${variables.colors.accent};
  background: ${variables.colors.secondary};
`;

export const InputPhone = styled(PhoneInput)`
  width: 350px;
  padding: 18px 20px;
  font-size: 18px;

  color: ${variables.colors.primary};

  border-radius: 3px;
  border: 1px solid ${variables.colors.accent};
  background: ${variables.colors.secondary};

  & input {
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    font-size: 18px;
  }
`;
