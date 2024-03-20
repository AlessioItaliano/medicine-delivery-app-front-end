import styled from "styled-components";

import { NavLink } from "react-router-dom";

import PhoneInput from "react-phone-number-input";

import { variables } from "stylesheet/variables";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;
export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;

  color: ${variables.colors.primary};
`;

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

export const Input = styled.input`
  width: 350px;
  padding: 18px 20px;
  font-size: 18px;

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
export const Redirect = styled.p`
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;

  color: ${variables.colors.primary};
`;

export const Link = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;

  text-decoration: underline;
  text-transform: uppercase;

  cursor: pointer;

  color: ${variables.colors.accent};
`;
