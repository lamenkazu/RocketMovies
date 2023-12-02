import { Container, Profile, StyledLink, Cover, ProfileText } from "./styles";
import { Input } from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
export const Header = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <Container>
      <StyledLink to="/">RocketMovies</StyledLink>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <ProfileText>
          <strong data-testid="username">
            <Link to="/profile">Erick Etiene</Link>
          </strong>

          <span>
            <button onClick={handleLogOut}>sair</button>
          </span>
        </ProfileText>
        <Link to="/profile">
          <Cover src="https://github.com/lamenkazu.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  );
};
