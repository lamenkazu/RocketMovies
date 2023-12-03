import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Container, Title, Main } from "./styles";
import { Button } from "../../components/Button";
import { MovieCard } from "./MovieCard";

import { FiPlus } from "react-icons/fi";

export const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await api.get(`/Notes?title&description&rating`);
      setNotes(response.data);
    };

    fetchNotes();
  }, []);

  return (
    <Container>
      <Title>
        <h1>Meus filmes</h1>

        <Button to="/movie/new" icon={FiPlus} title="Adicionar filme" />
      </Title>

      <Main data-testid="main">
        {notes &&
          notes.map((note) => (
            <MovieCard
              to={`/movie/preview/${note.note_id}`}
              key={note.note_id}
              data={note}
            />
          ))}
      </Main>
    </Container>
  );
};
