import styled from "styled-components";

import { variables } from "stylesheet/variables";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 18px;
`;

export const SubmitContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: end;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 35px;
  font-weight: 500;

  color: ${variables.colors.primary};
`;

export const DiscountContainer = styled.div``;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Input = styled.input`
  width: 350px;
  padding: 18px 20px;
  font-size: 18px;

  color: ${variables.colors.primary};

  border-radius: 3px;
  border: 1px solid ${variables.colors.accent};
  background: ${variables.colors.secondary};
`;
