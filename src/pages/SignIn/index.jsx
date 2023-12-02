import { useState } from "react";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextLink } from "./../../components/TextLink/index";
import { useAuth } from "../../hooks/auth";

export const SignIn = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signIn({ email, password });
  };

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu login</h2>
        <Input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} />

        <TextLink title="Criar conta" to="/register" />
      </Form>
    </Container>
  );
};
