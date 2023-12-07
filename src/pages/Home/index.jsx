import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Container, Title, Main } from "./styles";
import { Button } from "../../components/Button";
import { MovieCard } from "./MovieCard";
import { Input } from "../../components/Input";

import { FiPlus } from "react-icons/fi";

export const Home = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await api.get(
        `/Notes?title=${search}&description&rating`
      );
      setNotes(response.data);
    };

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Title>
        <h1>Meus filmes</h1>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button to="/movie/new" icon={FiPlus} title="Adicionar filme" />
      </Title>

      <Main data-testid="main">
        {notes?.map((note) => (
          <MovieCard
            key={note.note_id}
            to={`/movie/preview/${note.note_id}`}
            data={note}
          />
        ))}
      </Main>
    </Container>
  );
};
