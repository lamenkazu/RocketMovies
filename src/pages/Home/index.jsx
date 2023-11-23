import { FiPlus } from "react-icons/fi";
import { Container, Title, Main } from "./styles";

import { Button } from "../../components/Button";
import { MovieCard } from "./MovieCard";

export const Home = () => {
  return (
    <Container>
      <Title>
        <h1>Meus filmes</h1>

        <Button icon={FiPlus} title="Adicionar filme" />
      </Title>

      <Main data-testid="main">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Main>
    </Container>
  );
};
