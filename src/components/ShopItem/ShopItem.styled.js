import styled from "styled-components";

import noAvaibleImg from "../../images/noAvaibleImg.png";

import { variables } from "stylesheet/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;

  padding: 20px;
  width: 100%;
  height: auto;

  border-radius: 5px;
  background: ${variables.colors.secondary};
  box-shadow: ${variables.colors.boxShadowSecondary};

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    width: 260px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    width: 306px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding-top: 60%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;

  background-image: url(${noAvaibleImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;

  color: ${variables.colors.primary};
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 500;

  color: ${variables.colors.primary};
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: 700;

  color: ${variables.colors.primary};
`;

export const Type = styled.p`
  font-size: 16px;
  font-weight: 500;

  color: ${variables.colors.primary};
`;

export const Made = styled.p`
  font-size: 16px;
  font-weight: 500;

  color: ${variables.colors.primary};
`;
