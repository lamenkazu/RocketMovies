import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container, Profile, StyledLink, Cover, ProfileText } from "./styles";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const handleLogOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <Container>
      <StyledLink to="/">RocketMovies</StyledLink>

      <Profile>
        <ProfileText>
          <strong data-testid="username">
            <Link to="/profile">{user.name}</Link>
          </strong>

          <span>
            <button onClick={handleLogOut}>sair</button>
          </span>
        </ProfileText>
        <Link to="/profile">
          <Cover src={avatarUrl} alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  );
};
