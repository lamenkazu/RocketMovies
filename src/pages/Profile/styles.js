import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
  max-width: 34rem;
  margin: -10.4rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.PRIMARY};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.GRAY_500};
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 14.4rem;

  background-color: ${({ theme }) => theme.SECOND_BG};

  display: flex;
  align-items: center;

  padding: 0 12.4rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.PRIMARY};

  svg {
    font-size: 2.4rem;
  }
`;
