import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Home } from ".";

import { api } from "../../services/api";

jest.mock("axios", () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
    defaults: {
      baseURL: "https://mocked-base-url.com",
    },
  })),
}));

beforeAll(() => {
  const mockNotes = [
    {
      note_id: 0,
      title: "My awesome note",
      rating: 4,
      description: "This is a great note!",
      tags: [
        { tag_id: 0, name: "react" },
        { tag_id: 1, name: "javascript" },
      ],
      created_at: "2023-12-05T16:18:00.000Z",
    },
    {
      note_id: 1,
      title: "My awesome second note",
      rating: 5,
      description: "This is a great note! And the last one",
      tags: [
        { tag_id: 0, name: "styled-components" },
        { tag_id: 1, name: "jest" },
      ],
      created_at: "2023-12-05T17:18:00.000Z",
    },
  ];

  //Aplica lógica de filtros para o funcionamento do teste
  api.get.mockImplementation((url) => {
    const params = new URLSearchParams(url.split("?")[1]);
    const titleSearch = params.get("title");

    const filteredNotes = titleSearch
      ? mockNotes.filter((note) =>
          note.title.toLowerCase().includes(titleSearch.toLowerCase())
        )
      : mockNotes;

    return { data: filteredNotes };
  });
});

describe("Home Page", () => {
  it("should render all page components successfully", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
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

  it("should render page successfully", async () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(container.firstChild).toBeInTheDocument();

      expect(screen.getByText("My awesome note")).toBeInTheDocument();
      expect(screen.getByText("This is a great note!")).toBeInTheDocument();
      expect(screen.getByText("react")).toBeInTheDocument();
      expect(screen.getByText("react")).toBeInTheDocument();
      expect(screen.getByText("javascript")).toBeInTheDocument();

      expect(screen.getByText("My awesome second note")).toBeInTheDocument();
      expect(
        screen.getByText("This is a great note! And the last one")
      ).toBeInTheDocument();
      expect(screen.getByText("styled-components")).toBeInTheDocument();
      expect(screen.getByText("jest")).toBeInTheDocument();
    });
  });

  it("should update rendered notes based on search input", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("main")).toBeInTheDocument();

      userEvent.clear(screen.getByPlaceholderText("Pesquisar pelo título"));

      userEvent.type(
        screen.getByPlaceholderText("Pesquisar pelo título"),
        "second"
      );
    });

    await waitFor(() => {
      expect(screen.queryByText("My awesome note")).not.toBeInTheDocument();
      expect(screen.getByText("My awesome second note")).toBeInTheDocument();
    });
  });
});
