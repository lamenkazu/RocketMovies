import styled from "styled-components";

export const Container = styled.div`
  grid-area: "main";
  padding-inline: 12.3rem;
`;

export const Title = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 4rem;

  > div {
    width: 50%;
    margin-top: 2rem;
  }

  > button {
    display: flex;
    align-items: center;
    width: max-content;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  gap: 2.4rem;

  height: 70vh;

  overflow-y: scroll;
`;
