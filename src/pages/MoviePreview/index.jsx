import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "./../../hooks/auth";
import { format } from "date-fns";

import { Container, Title, Tags, PostInfo, StyledRating, Main } from "./styles";
import { Tag } from "../../components/Tag";
import { TextLink } from "../../components/TextLink";

import arrowBack from "../../assets/arrowBack.svg";
import { LuClock3 } from "react-icons/lu";
import { defaultTheme } from "../../styles/theme";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export const MoviePreview = () => {
  const params = useParams();
  const { user } = useAuth();
  const [note, setNote] = useState({});

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const formatDate = (dbDate) => {
    if (dbDate) {
      const date = new Date(dbDate);
      return format(date, "dd/MM/yy 'às' HH:mm");
    }
  };

  useEffect(() => {
    const fetchNote = async () => {
      const response = await api.get(`/Notes/${params.id}`);
      setNote(response.data);
    };

    fetchNote();
  }, []);

  return (
    <Container>
      <TextLink to="/" title="Voltar" icon={arrowBack} />
      {note && (
        <Main>
          <Title data-testid="title">
            <h1>{note.title}</h1>
            <StyledRating
              data-testid="rating"
              fillColor={defaultTheme.PRIMARY}
              size={20}
              initialValue={note.rating}
              readonly
            />
          </Title>

          <PostInfo data-testid="postInfo">
            <img src={avatarUrl} alt="Foto do usuário" />
            <span>Por {user.name}</span>
            <LuClock3 color={defaultTheme.PRIMARY} />
            <span>{formatDate(note.created_at)}</span>
          </PostInfo>

          <Tags data-testid="tags">
            {note.tags?.map((tag, index) => (
              <Tag key={index} title={tag} />
            ))}
          </Tags>

          <p data-testid="paragraph">{note.description}</p>
        </Main>
      )}
    </Container>
  );
};
