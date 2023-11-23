import { Container } from "./styles";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <Container>
      <div>Header</div>
      <Outlet />
    </Container>
  );
};
