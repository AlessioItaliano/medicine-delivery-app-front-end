import styled from "styled-components";

import noAvaibleImg from "../../images/noAvaibleImg.png";

import { variables } from "stylesheet/variables";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 18px;
  position: relative;

  padding: 10px;
  width: 100%;
  height: auto;
  border-radius: 30px;

  background-color: ${variables.colors.secondary};

  // @media screen and (min-width: ${variables.breakpoints.tablet}) {
  //   width: 260px;
  // }
  // @media screen and (min-width: ${variables.breakpoints.desktop}) {
  //   width: 306px;
  // }
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

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;

  color: ${variables.colors.primary};
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;

  color: ${variables.colors.primary};
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