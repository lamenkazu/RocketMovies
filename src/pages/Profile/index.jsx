import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar, Header, StyledLink } from "./styles";
import { Input } from "./../../components/Input";
import { Button } from "./../../components/Button";

export function Profile() {
  return (
    <Container>
      <Header>
        <StyledLink to="/">
          <FiArrowLeft />
          Voltar
        </StyledLink>
      </Header>

      <Form>
        <Avatar>
          <img src="https://github.com/lamenkazu.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Name" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha Atual" type="password" icon={FiLock} />
        <Input placeholder="Nova Senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
