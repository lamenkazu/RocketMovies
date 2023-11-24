import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Button({ title, loading = false, icon: Icon, to, ...rest }) {
  return (
    <Link to={to}>
      <Container type="button" disabled={loading} {...rest}>
        {Icon && <Icon />}
        <p> {title}</p>
      </Container>
    </Link>
  );
}
