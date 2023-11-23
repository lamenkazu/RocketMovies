import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  padding: 0 13.6rem;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.PRIMARY};

    margin-top: 2.4rem;
  }

  > span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.GRAY_100};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
    font-weight: 500;
  }

  > a {
    margin-top: 6.4rem;
    color: ${({ theme }) => theme.PRIMARY};
  }
`;
