import styled from "styled-components";

export const Input = styled.input`
  display: flex;

  background: transparent;
  color: ${({ theme }) => theme.WHITE};
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.GRAY_300};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: max-content;

  margin-right: 2.4rem;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.GRAY_700};

  color: ${({ theme }) => theme.WHITE};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.GRAY_300}` : "none"};

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  > input,
  > p {
    height: 5.6rem;
    padding: 1.2rem;
  }

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.PRIMARY};
  }
`;
