import { Container, Profile, StyledLink, Cover, ProfileText } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <Container>
      <StyledLink>RocketMovies</StyledLink>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <ProfileText>
          <strong data-testid="username">
            <Link to="/profile">Erick Etiene</Link>
          </strong>
          <span>sair</span>
        </ProfileText>
        <Link to="/profile">
          <Cover src="https://github.com/lamenkazu.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  );
};
