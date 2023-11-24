import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 3.2rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.SECOND_BG};

  margin-right: 0.8rem;
`;

export const Title = styled.div`
  > h2 {
    color: ${({ theme }) => theme.WHITE_2};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const P = styled.p`
  font-family: "Roboto", sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.GRAY_200};
  margin-bottom: 1rem;
`;

export const Tags = styled.section`
  display: flex;
  gap: 0.8rem;
`;
