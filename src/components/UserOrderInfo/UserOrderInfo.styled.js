import styled from "styled-components";

export const Container = styled.div`
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
`;

export const Box = styled.div`
  width: 400px;
  height: 400px;
`;
