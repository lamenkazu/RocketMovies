import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

//Styles
import {
  Container,
  Main,
  MarkDowns,
  TextArea,
  Inputs,
  Buttons,
  ButtonExclude,
  ButtonSave,
} from "./styles";

//Components
import { TextLink } from "./../../components/TextLink";
import { Input } from "./../../components/Input";
import { Marker } from "../../components/Marker";

//Images
import imgBack from "../../assets/arrowBack.svg";

export const NewMovie = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newMarker, setNewMarker] = useState("");

  const handleAddMarker = () => {
    if (newMarker === "") {
      return;
    }
    setTags((prevState) => [...prevState, newMarker]);
    setNewMarker("");
  };

  const handleRemoveMarker = (deleted) => {
    setTags((prevState) => prevState.filter((_, index) => index !== deleted));
  };

  const handleSaveMovie = async () => {
    if (!title || !rating) {
      return alert("Os campos com asterisco são obrigatórios");
    }
    if (tags.length === 0) {
      return alert("O filme deve ter pelo menos um marcador");
    }
    if (rating < 1 || rating > 5) {
      return alert("A nota do filme deve estar entre 1 e 5");
    }

    await api.post("/Notes", {
      title,
      description,
      rating,
      tags,
      user_id: user.user_id,
    });

    navigate(-1);
  };

  return (
    <Container>
      <TextLink to="/" icon={imgBack} title="Voltar" />

      <Main>
        <h1>Novo Filme</h1>

        <Inputs>
          <Input
            placeholder="Titulo *"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Sua nota (0 a 5) *"
            onChange={(e) => setRating(e.target.value)}
          />
        </Inputs>
        <TextArea
          placeholder="Observações"
          onChange={(e) => setDescription(e.target.value)}
        ></TextArea>

        <h2>Marcadores</h2>

        <MarkDowns>
          {tags.map((tag, index) => (
            <Marker
              key={index}
              value={tag}
              onClick={() => {
                handleRemoveMarker(index);
              }}
            />
          ))}

          <Marker
            isNew
            placeholder="Novo Marcador"
            value={newMarker}
            onChange={(e) => setNewMarker(e.target.value)}
            onClick={handleAddMarker}
          />
        </MarkDowns>

        <Buttons>
          <ButtonExclude>Excluir Fime</ButtonExclude>
          <ButtonSave onClick={handleSaveMovie}>Salvar alterações</ButtonSave>
        </Buttons>
      </Main>
    </Container>
  );
};
