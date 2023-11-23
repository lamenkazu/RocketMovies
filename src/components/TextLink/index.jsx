import { Container } from "./styles";

export const TextLink = ({ title, icon: Icon, ...rest }) => {
  return (
    <Container {...rest}>
      {" "}
      {Icon && <img src={Icon} alt="" />}
      {title}
    </Container>
  );
};
