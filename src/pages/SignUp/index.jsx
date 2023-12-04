import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextLink } from "../../components/TextLink";

import arrowBack from "../../assets/arrowBack.svg";

export const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserSignUp = () => {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos para efetuar o cadastro");
    }

    api
      .post("/Users", { name, email, password })
      .then(() => {
        alert("Cadastro efetuado com sucesso!");
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("Não foi possível realizar o cadastro");
        }
      });
  };

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
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
        <Button title="Cadastrar" onClick={handleUserSignUp} />
        <TextLink title="Voltar para o login" icon={arrowBack} to="/" />
      </Form>
    </Container>
  );
};
