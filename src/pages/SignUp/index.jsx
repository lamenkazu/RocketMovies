import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextLink } from "../../components/TextLink";
import arrowBack from "../../assets/arrowBack.svg";

export const SignUp = () => {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu login</h2>
        <Input placeholder="Nome" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Button type="submit" title="Entrar" />
        <TextLink title="Voltar para o login" icon={arrowBack} to="/" />
      </Form>
    </Container>
  );
};
