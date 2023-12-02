import { render } from "@testing-library/react";
import { AppLayout } from ".";
import { MemoryRouter } from "react-router-dom";

describe("DefaultLayout Component", () => {
  it("should renders DefaultLayout successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
