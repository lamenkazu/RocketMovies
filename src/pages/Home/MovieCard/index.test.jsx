import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { MovieCard } from ".";

describe("Header Page", () => {
  it("should render page successfully", () => {
    const { container } = render(<MovieCard />);

    expect(container).toBeInTheDocument();
  });

  it("should render all page components successfully", () => {
    render(
      <MemoryRouter>
        <MovieCard />
      </MemoryRouter>
    );

    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("paragraph")).toBeInTheDocument();
    expect(screen.getByTitle(/0 out of 5/i)).toBeInTheDocument();
    expect(screen.getByTestId("tags")).toBeInTheDocument();
  });
});
