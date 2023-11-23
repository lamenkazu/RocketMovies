import styled from "styled-components";
import backgroundImg from "../../assets/AuthBGImg.png";

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
`;

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
