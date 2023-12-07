import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { MoviePreview } from ".";

// Mock the user.avatar property
jest.mock("../../hooks/auth", () => ({
  useAuth: jest.fn(),
}));

// Mock the axios create method and the get method
jest.mock("axios", () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
    defaults: {
      baseURL: "https://mocked-base-url.com", // Mock the baseURL property
    },
  })),
}));

beforeAll(() => {
  const mockNote = {
    id: 1,
    title: "My awesome note",
    rating: 4,
    description: "This is a great note!",
    tags: ["react", "javascript"],
    created_at: "2023-12-05T16:18:00.000Z",
  };

  // Set up the mock for the get method
  api.get.mockResolvedValue({ data: mockNote });

  const mockUser = {
    name: "John Doe",
    avatar: "https://example.com/avatar.png",
  };

  useAuth.mockReturnValue({ user: mockUser });
});

describe("MoviePreview Page", () => {
  it("should render page successfully", async () => {
    const { container } = render(
      <MemoryRouter>
        <MoviePreview />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  it("should render all page components successfully", async () => {
    render(
      <MemoryRouter>
        <MoviePreview />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByRole("link", {
          name: /voltar/i,
        })
      ).toBeInTheDocument();

      expect(screen.getByTestId("title")).toBeInTheDocument();

      expect(screen.getByTitle(/4 out of 5/i)).toBeInTheDocument();

      expect(
        screen.getByRole("img", {
          name: /foto do usuário/i,
        })
      ).toBeInTheDocument();

      expect(screen.getByTestId("postInfo")).toBeInTheDocument();
      expect(screen.getByTestId("tags")).toBeInTheDocument();
      expect(screen.getByTestId("paragraph")).toBeInTheDocument();

      expect(screen.getByTestId("title")).toHaveTextContent("My awesome note");

      expect(screen.getByText("react")).toBeInTheDocument();
      expect(screen.getByText("javascript")).toBeInTheDocument();
    });
  });
});
