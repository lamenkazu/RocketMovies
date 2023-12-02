import { Container } from "./styles";

export function Button({ title, loading = false, icon: Icon, to, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon />}
      <p> {title}</p>
    </Container>
  );
}
