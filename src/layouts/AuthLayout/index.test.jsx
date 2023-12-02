import { render } from "@testing-library/react";
import { AuthLayout } from ".";
import { MemoryRouter } from "react-router-dom";

describe("DefaultLayout Component", () => {
  it("should renders DefaultLayout successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <AuthLayout />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
