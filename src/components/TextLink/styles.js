import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.PRIMARY};
  align-self: center;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-size: 1.6rem;

  > img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
