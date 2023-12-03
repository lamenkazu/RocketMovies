import { Container, Tags, P, Title } from "./styles";
import { defaultTheme } from "../../../styles/theme";

import { Tag } from "../../../components/Tag";
import { Rating } from "react-simple-star-rating";

export const MovieCard = ({ data, ...rest }) => {
  console.log(data);
  return (
    <Container {...rest}>
      <Title>
        <h2 data-testid="title">{data.title}</h2>

        <Rating
          fillColor={defaultTheme.PRIMARY}
          size={12}
          initialValue={data.rating}
        />
      </Title>
      <P data-testid="paragraph">{data.description}</P>

      <Tags data-testid="tags">
        {data.tags.map((tag) => (
          <Tag key={tag.tag_id} title={tag.name} />
        ))}
      </Tags>
    </Container>
  );
};
