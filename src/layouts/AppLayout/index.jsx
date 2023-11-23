import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
