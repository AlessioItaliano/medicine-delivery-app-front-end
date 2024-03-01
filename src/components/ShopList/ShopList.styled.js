import styled from "styled-components";

import { variables } from "../../stylesheet/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  padding: 15px;
  border-radius: 40px;
  background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(37, 145, 251, 0.98) 0.1%,
    #000780 99.8%
  );

  // @media screen and (min-width: ${variables.breakpoints.desktop}) {
  //   flex-direction: row;
  //   justify-content: center;
  //   align-items: end;
  // }
`;
