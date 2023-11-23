import { Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

//Paginas
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { NewMovie } from "../pages/NewMovie";
import { MoviePreview } from "../pages/MoviePreview";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/new" element={<NewMovie />} />
        <Route path="/movie/preview/:id" element={<MoviePreview />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
