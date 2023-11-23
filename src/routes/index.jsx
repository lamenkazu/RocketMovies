import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const hasUser = true;

  return (
    <BrowserRouter>{hasUser ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}
