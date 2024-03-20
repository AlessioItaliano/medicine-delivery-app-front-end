import styled from "styled-components";

import { variables } from "../../stylesheet/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  height: 770px;
  overflow-y: auto;

  padding: 15px;
  border-radius: 5px;
  background: ${variables.colors.secondary};
  box-shadow: ${variables.colors.boxShadowSecondary};
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 18px;

  flex-wrap: wrap;
  column-count: 1;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    column-count: 2;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    column-count: 3;
  }
`;

export const Item = styled.li``;
