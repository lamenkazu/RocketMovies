import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { NewMovie } from ".";

describe("NewMovie Page", () => {
  it("should render page successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <NewMovie />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render all page components successfully", () => {
    render(
      <MemoryRouter>
        <NewMovie />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: /voltar/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /novo filme/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/titulo/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/sua nota \(0 a 5\)/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/observações/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /marcadores/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/Novo Marcador/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /excluir fime/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /salvar alterações/i,
      })
    ).toBeInTheDocument();
  });
});
