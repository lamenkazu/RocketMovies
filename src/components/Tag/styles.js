import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  padding: 0.5rem 1.4rem;
  border-radius: 0.5rem;

  width: max-content;

  margin-right: 0.6rem;
  background-color: ${({ theme }) => theme.GRAY_500};
  color: ${({ theme }) => theme.GRAY_000};
`;
