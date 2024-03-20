import styled from "styled-components";

import { variables } from "../../stylesheet/variables";

export const Container = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  text-aline: center;
  gap: 18px;
  height: 85px;

  padding: 21px 75px;
  // border-radius: 40px;
  background-color: ${variables.colors.bgSecondary};
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;

  color: ${variables.colors.secondary};
`;

export const Form = styled.form`
  display: flex;
  // flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Input = styled.input`
  width: 453px;
  height: 40px;

  padding: 18px 20px;
  font-size: 18px;

  color: ${variables.colors.primary};

  border-radius: 3px;
  border: 1px solid ${variables.colors.accent};
  background: ${variables.colors.secondary};
`;
