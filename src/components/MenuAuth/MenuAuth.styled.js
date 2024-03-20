import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { variables } from "stylesheet/variables";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 10px;
  padding-right: 10px;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 11px 21px;

  cursor: pointer;

  border-radius: 5px;
  border: none;
  background: ${variables.colors.linerGradient};

  font-weight: 500;
  font-size: 16px;
  color: ${variables.colors.secondary};

  &:focus,
  &:hover,
  &:active {
    background: ${variables.colors.accent};
    color: ${variables.colors.secondary};
  }
`;

export const UserContainer = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
