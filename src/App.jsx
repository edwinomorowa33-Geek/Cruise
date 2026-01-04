import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import MovieList from "./Components/MovieList/MovieList";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import LandingPage from "./Pages/Landing/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page (NO navbar) */}
        <Route path="/" element={<LandingPage />} />

        {/* Pages WITH navbar */}
        <Route
          path="/movie"
          element={
            <>
              <Navbar />
              <MovieList />
            </>
          }
        />

        <Route
          path="/movie/:id"
          element={
            <>
              <Navbar />
              <MovieDetails />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
