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

  const [form, setForm] = useState({
    title: "",
    rating: "",
    description: "",
    newMarker: "",
  });
  const [tags, setTags] = useState([]);

  const handleFormChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMarker = () => {
    if (form.newMarker === "") return;

    setTags((prevState) => [...prevState, form.newMarker]);
    setForm({ ...form, newMarker: "" });
  };

  const handleRemoveMarker = (deleted) => {
    setTags((prevState) => prevState.filter((_, index) => index !== deleted));
  };

  const handleSaveMovie = async () => {
    if (!form.title || !form.rating) {
      return alert("Os campos com asterisco são obrigatórios");
    }
    if (tags.length === 0) {
      return alert("O filme deve ter pelo menos um marcador");
    }
    if (form.rating < 1 || form.rating > 5) {
      return alert("A nota do filme deve estar entre 1 e 5");
    }

    await api.post("/Notes", {
      title: form.title,
      description: form.description,
      rating: form.rating,
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
            name="title"
            placeholder="Titulo *"
            onChange={handleFormChanges}
          />
          <Input
            name="rating"
            type="number"
            placeholder="Sua nota (0 a 5) *"
            onChange={handleFormChanges}
          />
        </Inputs>
        <TextArea
          name="description"
          placeholder="Observações"
          onChange={handleFormChanges}
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
            name="newMarker"
            isNew
            placeholder="Novo Marcador"
            value={form.newMarker}
            onChange={handleFormChanges}
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
