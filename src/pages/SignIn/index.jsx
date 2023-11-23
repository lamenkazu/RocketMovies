import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextLink } from "./../../components/TextLink/index";

export const SignIn = () => {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu login</h2>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Button type="submit" title="Entrar" />

        <TextLink title="Criar conta" to="/register" />
      </Form>
    </Container>
  );
};
