import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Home } from ".";

describe("Home Page", () => {
  it("should render page successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render all page components successfully", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /meus filmes/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /adicionar filme/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
});
