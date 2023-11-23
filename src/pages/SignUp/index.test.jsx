import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { SignUp } from ".";

describe("SignUp Page", () => {
  it("should render page successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render all page components successfully", () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );

    expect(screen.getByText("RocketMovies")).toBeInTheDocument();
    expect(
      screen.getByText("Aplicação para acompanhar tudo que assistir.")
    ).toBeInTheDocument();

    expect(screen.getByText("Crie sua conta")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();

    expect(screen.getByText("Cadastrar")).toBeInTheDocument();
    expect(screen.getByText("Voltar para o login")).toBeInTheDocument();
  });
});
