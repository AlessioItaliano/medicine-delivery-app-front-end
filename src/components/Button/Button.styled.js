import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 11px 21px;

  cursor: pointer;

  border-radius: 5px;
  border: none;
  background: ${variables.colors.linerGradient};

  color: ${variables.colors.secondary};

  &:focus,
  &:hover,
  &:active {
    background: ${variables.colors.accent};
    color: ${variables.colors.secondary};
  }

  &:disabled {
    cursor: auto;
    background: ${variables.colors.secondary};
    color: ${variables.colors.accentHover};
    border: 1px solid ${variables.colors.accentHover};
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
`;
