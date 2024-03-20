import styled from "styled-components";
import { variables } from "../../stylesheet/variables";
import markerIcon from "../../icons/marker.svg";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 30px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${variables.colors.primary};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Item = styled.li`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  padding-left: 5px;
  margin-left: 20px;
  color: ${variables.colors.primary};

  &:hover,
  &:focus,
  &.active {
    color: ${variables.colors.accent};
  }

  &:hover::marker,
  &:focus::marker,
  &.active::marker {
    content: url(${markerIcon});
    margin-left: 10px;
  }
`;
