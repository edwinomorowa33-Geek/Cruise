import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Fire from "../../assets/Images/fire.png";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=6c29159d86651fe8ad7c7e57feb2b486&language=en-US&page=1"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();
        setMovies(Array.isArray(data.results) ? data.results : []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular
        </h2>

        <div className="movie_list_fs">
          <ul className="movie_filter">
            <li className="movie_filter_item">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>

          <select className="Movie_sorting">
            <option value="">Sort By</option>
            <option value="date">Date</option>
            <option value="rating">Rating</option>
          </select>

          <select className="Movie_sorting">
            <option value="">Order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="Movie_cards">
        {loading ? (
          <p>Loading movies...</p>
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}                     
              title={movie.title}
              date={movie.release_date}
              rating={movie.vote_average}
              posterPath={movie.poster_path}
              description={movie.overview}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default MovieList;
