import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Header } from ".";

import { useAuth } from "../../hooks/auth";

jest.mock("../../hooks/auth", () => ({
  useAuth: jest.fn(),
}));

beforeAll(() => {
  const mockUser = {
    name: "John Doe",
    avatar: "https://example.com/avatar.png",
  };

  useAuth.mockReturnValue({ user: mockUser });
});

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

    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByText("sair")).toBeInTheDocument();

    expect(screen.getByAltText("Foto do usuário")).toBeInTheDocument();
  });

  test("if links redirect to the correct path", async () => {
    render(
      <MemoryRouter>
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
        name: /John Doe/i,
      })
    ).toHaveAttribute("href", "/profile");

    expect(
      screen.getByRole("link", {
        name: /foto do usuário/i,
      })
    ).toHaveAttribute("href", "/profile");
  });
});
