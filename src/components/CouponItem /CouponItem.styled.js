import styled from "styled-components";

import noAvaibleImg from "../../images/noAvaibleImg.png";

import { variables } from "stylesheet/variables";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 18px;
  position: relative;

  width: 100%;
  height: auto;

  padding: 30px;
  border-radius: 5px;
  background: ${variables.colors.secondary};
  box-shadow: ${variables.colors.boxShadowSecondary};
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
  text-align: center;
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 700;

  color: ${variables.colors.primary};
`;
