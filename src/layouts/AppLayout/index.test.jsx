import { render } from "@testing-library/react";
import { AppLayout } from ".";
import { MemoryRouter } from "react-router-dom";

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
