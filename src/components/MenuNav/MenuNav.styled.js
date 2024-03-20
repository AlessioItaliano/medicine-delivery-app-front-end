import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { variables } from "stylesheet/variables";

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 16px;
  color: ${variables.colors.primary};
  position: relative;

  &.active,
  &:hover {
    color: ${variables.colors.accent};
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: ${variables.colors.accent};
    transition: width 0.4s ease-in-out;
  }

  &.active::before,
  &:hover::before {
    width: 100%;
  }
`;
