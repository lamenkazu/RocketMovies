import { Rating } from "react-simple-star-rating";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
  padding: 4rem 12.3rem 0;

  > a {
    margin-bottom: 2.4rem;
  }

  > main {
    max-height: 60vh;
    overflow-y: scroll;
  }
`;
export const Tags = styled.div`
  display: flex;
  gap: 0.8rem;
  padding-bottom: 4rem;
`;

export const Title = styled.section`
  display: flex;
  align-items: center;
  gap: 1.9rem;

  h1 {
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${({ theme }) => theme.WHITE};
  }
`;

export const StyledRating = styled(Rating)`
  margin-top: 1rem;
`;

export const PostInfo = styled.section`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  padding: 2.4rem 0 4rem;

  > img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
  }

  > span {
    margin-right: 1rem;
  }
`;

export const Author = styled.div``;

export const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
