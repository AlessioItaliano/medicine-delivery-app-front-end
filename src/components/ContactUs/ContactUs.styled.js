import styled from "styled-components";

import { variables } from "stylesheet/variables";

export const Container = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 700px;
`;

export const AddressList = styled.ul``;

export const AddressItem = styled.li`
  cursor: pointer;
`;

export const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 5px;
  font-weight: 500;
  font-size: 12px;

  cursor: pointer;

  color: ${variables.colors.secondary};

  &.active,
  &:hover {
    color: ${variables.colors.accentHover};
  }
`;

export const LinkToWebSite = styled.a`
  text-decoration: underline;
  display: inline-block;
  padding: 5px;
  font-weight: 500;
  font-size: 12px;

  cursor: pointer;

  color: ${variables.colors.secondary};

  &.active,
  &:hover {
    color: ${variables.colors.accentHover};
  }
`;

export const SocialsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SocialsItem = styled.li``;

export const SocialsLink = styled.a`
  cursor: pointer;
`;
