import styled from "styled-components";

import { variables } from "../../stylesheet/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  height: 80vh;
  overflow-y: auto;

  padding: 15px;
  border-radius: 40px;
  background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(37, 145, 251, 0.98) 0.1%,
    #000780 99.8%
  );
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
