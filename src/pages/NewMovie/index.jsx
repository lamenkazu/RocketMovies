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
  return (
    <Container>
      <TextLink to="/" icon={imgBack} title="Voltar" />

      <Main>
        <h1>Novo Filme</h1>

        <Inputs>
          <Input placeholder="Titulo" />
          <Input placeholder="Sua nota (0 a 5)" />
        </Inputs>
        <TextArea placeholder="Observações" name="" id=""></TextArea>

        <h2>Marcadores</h2>

        <MarkDowns>
          <Marker value="reacasdasdasdaaaaaaadt" />
          <Marker value="reacasdaaaaadt" />
          <Marker value="rsdaaaaaaadt" />
          <Marker value="reaaaadt" />
          <Marker value="reacasdaaaaadt" />
          <Marker value="reaaaadt" />
          <Marker value="rsdaaaaaaadt" />
          <Marker value="reacasdasdasdaaaaaaadt" />
          <Marker isNew placeholder="Nova Tag" />
        </MarkDowns>

        <Buttons>
          <ButtonExclude>Excluir Fime</ButtonExclude>
          <ButtonSave>Salvar alterações</ButtonSave>
        </Buttons>
      </Main>
    </Container>
  );
};
