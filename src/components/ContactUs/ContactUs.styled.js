import styled from "styled-components";

import { variables } from "stylesheet/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 5px;
  font-weight: 500;
  font-size: 10px;
  color: ${variables.colors.primary};

  &.active,
  &:hover {
    color: ${variables.colors.tertiary};
  }
`;

export const LinkToWebSite = styled.a`
  text-decoration: underline;
  display: inline-block;
  padding: 5px;
  font-weight: 500;
  font-size: 10px;
  color: ${variables.colors.tertiary};

  &.active,
  &:hover {
    color: ${variables.colors.quaternary};
  }
`;
