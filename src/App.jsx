import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Routes, Route, NavLink } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

import { lazy, Suspense } from "react";
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";

const App = () => {
  const [count, setCount] = useState(0);

  //const HomePage = lazy(() => import("pages/HomePage.jsx"));
  //const MovesPage = lazy(() => import("pages/MoviesPage.jsx"));

  return (
    <div>
      <header>
      <nav>
          <NavLink
            // className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            // className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
    <Routes>
      <Route path="/">
        {/* <Route element={<Loader />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
    </main>
    </div>
  );
}

export default App;
