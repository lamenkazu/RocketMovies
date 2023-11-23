import { Routes, Route } from "react-router-dom";

//Paginas
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { AuthLayout } from "../layouts/AuthLayout";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
