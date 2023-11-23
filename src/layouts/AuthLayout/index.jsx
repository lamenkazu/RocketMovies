import { Background, Container } from "./styles";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <Container>
      <Outlet />
      <Background />
    </Container>
  );
};
