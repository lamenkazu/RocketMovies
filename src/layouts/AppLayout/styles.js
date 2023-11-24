import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: max-content max-content;

  grid-template-areas:
    "header"
    "main";
`;
