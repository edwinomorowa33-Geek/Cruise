import React from "react";
import "./MovieCard.css";
import dummy from "../../assets/Images/dummy.jpg";

const MovieCard = ({
  title = "Movie Title",
  date = "10-20-2020",
  rating = 8.0,
  posterPath = null,
}) => {
  
  const posterUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : dummy;

  return (
    <a href="#" className="movie_card">
      <img
        src={posterUrl}
        alt={`${title} poster`}
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_title">{title}</h3>

        <div className="movie_date_rating">
          <p className="movie_date">{date}</p>
          <p className="movie_rating">{rating}</p>
        </div>

        <p className="movie_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
