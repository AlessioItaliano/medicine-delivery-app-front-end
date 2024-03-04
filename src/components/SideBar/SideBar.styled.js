import styled from "styled-components";

import { variables } from "../../stylesheet/variables";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  height: 80vh;

  padding: 30px;
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

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;

  color: ${variables.colors.secondary};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  width: 100%;
`;

export const Item = styled.li`
  // width: 100%;

  font-size: 15px;
  font-weight: 500;

  color: ${variables.colors.primary};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 18px 20px;
  font-size: 18px;

  color: ${variables.colors.primary};
  background: ${variables.colors.quinary};
  border-radius: 18px;
  border: 1px solid transparent;
`;
