import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  padding: 2.4rem 12.3rem;
  display: flex;
  align-items: center;
  gap: 6.4rem;

  border-bottom: 1px solid ${({ theme }) => theme.GRAY_300};
`;

export const StyledLink = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.PRIMARY};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  text-align: right;

  > strong {
    color: ${({ theme }) => theme.WHITE};

    font-size: 1.4rem;
  }

  > span {
    color: ${({ theme }) => theme.GRAY_200};

    font-size: 1.4rem;
  }
`;

export const Cover = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
`;
