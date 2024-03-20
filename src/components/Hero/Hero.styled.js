import styled from "styled-components";

import mainHero from "../../images/mainHero.jpeg";
import { variables } from "../../stylesheet/variables";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: 760px;

  padding: 21px 75px;

  background-color: ${variables.colors.bgSecondary};
  background-image: url(${mainHero});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-aline: center;
  gap: 18px;
`;

export const Title = styled.h2`
  font-size: 47px;
  font-weight: 700;
  letter-spacing: -1.41px;
  text-align: center;

  color: ${variables.colors.primary};
`;
