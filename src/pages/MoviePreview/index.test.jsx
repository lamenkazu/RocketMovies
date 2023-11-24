import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { MoviePreview } from ".";

describe("Home Page", () => {
  it("should render page successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <MoviePreview />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render all page components successfully", () => {
    render(
      <MemoryRouter>
        <MoviePreview />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: /voltar/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("img", {
        name: /foto do usuário/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("postInfo")).toBeInTheDocument();
    expect(screen.getByTestId("tags")).toBeInTheDocument();
    expect(screen.getByTestId("paragraph")).toBeInTheDocument();
  });
});
