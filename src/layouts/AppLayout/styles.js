import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 6.8rem auto;

  grid-template-areas:
    "header"
    "main";
`;
