import { Container, Profile, StyledLink, Cover, ProfileText } from "./styles";
import { Input } from "../Input";
export const Header = () => {
  return (
    <Container>
      <StyledLink>RocketMovies</StyledLink>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <ProfileText>
          <strong>Erick Etiene</strong>
          <span>sair</span>
        </ProfileText>
        <Cover src="https://github.com/lamenkazu.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
};
