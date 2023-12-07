import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Profile } from ".";

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

describe("Profile Page", () => {
  it("should render page successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render all page components successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    expect(getBackLink()).toBeInTheDocument();

    expect(
      screen.getByRole("img", {
        name: /foto do usuário/i,
      })
    ).toBeInTheDocument();

    expect(container.querySelector("#avatar")).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/senha atual/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/nova senha/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /salvar/i,
      })
    ).toBeInTheDocument();
  });

  test("if links redirect to the correct path", async () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    expect(getBackLink()).toHaveAttribute("href", "/");
  });
});

const getBackLink = () => {
  return screen.getByRole("link", {
    name: /voltar/i,
  });
};
