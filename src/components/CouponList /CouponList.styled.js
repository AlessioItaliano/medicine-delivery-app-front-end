import styled from "styled-components";

import { variables } from "../../stylesheet/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  height: 90vh;
  overflow-y: auto;

  padding: 30px;
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

export const Item = styled.li`
  width: 500px;
  color: ${variables.colors.primary};
`;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const EmptyWarning = styled.p`
  font-size: 24px;
  font-weight: 700;

  color: ${variables.colors.secondary};
`;
