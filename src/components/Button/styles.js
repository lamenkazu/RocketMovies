import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.PRIMARY};

  display: flex;
  justify-content: center;

  > p {
    color: ${({ theme }) => theme.GRAY_500};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  padding-inline: 3.2rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:disabled {
    opacity: 0.5;
  }
`;
