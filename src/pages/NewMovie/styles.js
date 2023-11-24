import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
  padding: 0 12.3rem 8.5rem;

  > a {
    margin-bottom: 2.4rem;
  }
`;

export const Main = styled.main`
  max-height: 78vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding-right: 1.6rem;
`;

export const MarkDowns = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 1.6rem;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.GRAY_900};
`;

export const Buttons = styled.section`
  display: flex;
  gap: 4rem;

  > button {
    height: 5.6rem;
    border: 0;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    border-radius: 1rem;
    font-weight: 500;
    width: 100%;
  }
`;

export const Inputs = styled.section`
  display: flex;
  gap: 4rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 15rem;

  background-color: ${({ theme }) => theme.GRAY_700};
  color: ${({ theme }) => theme.WHITE};

  resize: none;
  border: none;

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.GRAY_200};
  }
`;

export const ButtonExclude = styled.button`
  background-color: ${({ theme }) => theme.GRAY_900};
  color: ${({ theme }) => theme.PRIMARY};
`;

export const ButtonSave = styled.button`
  color: ${({ theme }) => theme.GRAY_500};
  background-color: ${({ theme }) => theme.PRIMARY};
`;
