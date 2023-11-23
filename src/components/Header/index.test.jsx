import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { Header } from ".";

describe("Header Page", () => {
  it("should render page successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render all page components successfully", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("RocketMovies")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Pesquisar pelo título")
    ).toBeInTheDocument();

    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByText("sair")).toBeInTheDocument();

    expect(screen.getByAltText("Foto do usuário")).toBeInTheDocument();
  });

  test("if links redirect to the correct path", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: /rocketmovies/i,
      })
    ).toHaveAttribute("href", "/");

    expect(
      screen.getByRole("link", {
        name: /erick etiene/i,
      })
    ).toHaveAttribute("href", "/profile");

    expect(
      screen.getByRole("link", {
        name: /foto do usuário/i,
      })
    ).toHaveAttribute("href", "/profile");
  });
});
