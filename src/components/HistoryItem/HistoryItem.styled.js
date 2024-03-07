import styled from "styled-components";

import noAvaibleImg from "../../images/noAvaibleImg.png";

import { variables } from "stylesheet/variables";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 18px;
  position: relative;
  text-align: center;
  align-items: center;

  padding: 10px;
  width: 100%;
  height: auto;
  border-radius: 30px;

  background-color: ${variables.colors.secondary};
`;
export const OrderMedicinesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 200px;
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
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
  overflow-y: auto;
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 700;

  color: ${variables.colors.primary};
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  overflow: auto;
  gap: 18px;

  flex-wrap: wrap;
  overflow: scroll;
`;

export const Item = styled.li`
  color: ${variables.colors.primary};
`;
