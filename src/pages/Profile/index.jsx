import { useState } from "react";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container, Form, Avatar, Header, StyledLink } from "./styles";
import { Input } from "./../../components/Input";
import { Button } from "./../../components/Button";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Profile() {
  const { user, updateUser } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangeAvatar = (event) => {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  };

  const handleSaveProfile = async () => {
    const updatedUser = {
      ...user,
      name,
      email,
      password: newPassword,
      old_password: password,
    };

    await updateUser({ user: updatedUser, avatarFile });
  };

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
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleSaveProfile} />
      </Form>
    </Container>
  );
}
