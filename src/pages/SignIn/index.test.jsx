import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { SignIn } from ".";

describe("SignIn Page", () => {
  it("should render page successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render all page components successfully", () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    expect(screen.getByText("RocketMovies")).toBeInTheDocument();
    expect(
      screen.getByText("Aplicação para acompanhar tudo que assistir.")
    ).toBeInTheDocument();
    expect(screen.getByText("Faça seu login")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();

    expect(screen.getByText("Entrar")).toBeInTheDocument();
    expect(screen.getByText("Criar conta")).toBeInTheDocument();
  });

  //   it("should not allow user to submit form with wrong email", async () => {
  //     render(
  //       <MemoryRouter>
  //         <SignIn />
  //       </MemoryRouter>
  //     );

  //     const inputEmailElement = screen.getByPlaceholderText("E-mail");
  //     const buttonForm = screen.getByText("Entrar");

  //     const wrongEmail = "emailerrado";

  //     userEvent.type(inputEmailElement, wrongEmail);
  //     userEvent.click(buttonForm);

  //     await waitFor(() => {
  //       const errorMessage = screen.getByText(
  //         `Inclua um "@" no endereço de e-mail."${wrongEmail}" está com um "@" faltando.`
  //       );
  //       expect(errorMessage).toBeInTheDocument();
  //     });
  //   });
});
