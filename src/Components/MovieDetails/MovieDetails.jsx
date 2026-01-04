import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams(); // 👈 get movie id from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=6c29159d86651fe8ad7c7e57feb2b486&language=en-US`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <section className="movie_details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie_details_img"
      />

      <div className="movie_details_info">
        <h1>{movie.title}</h1>
        <p>⭐ {movie.vote_average}</p>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
      </div>
    </section>
  );
};

export default MovieDetails;
