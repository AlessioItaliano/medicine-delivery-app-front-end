import styled from "styled-components";

import { variables } from "stylesheet/variables";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 160px;
  width: 100%;
  padding: 15px 75px;

  box-shadow: 0 -4px 4px ${variables.colors.boxShadow};
  border-radius: 12px 12px 0 0;

  background-color: ${variables.colors.bgFooter};
`;

export const Title = styled.h2`
  margin-bottom: 30px;

  font-size: 35px;
  font-weight: 700;

  color: ${variables.colors.tertiary};
`;

export const CopyRight = styled.p`
  color: ${variables.colors.secondary};
  font-size: 10px;
  line-height: 1.71;
`;

export const Link = styled.a`
  text-decoration: underline;
  color: ${variables.colors.accent};
`;
