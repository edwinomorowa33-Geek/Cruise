import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";
import dummy from "../../assets/Images/dummy.jpg";

const MovieCard = ({ id, title, date, rating, posterPath, description }) => {
  const posterUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : dummy;

  return (
    <Link to={`/movie/${id}`} className="movie_card_link">
      <div className="movie_card">
        <img
          src={posterUrl}
          alt={title}
          className="movie_poster"
          onError={(e) => (e.target.src = dummy)}
        />
        <div className="movie_details_overlay">
          <h3 className="movie_title">{title}</h3>
          <div className="movie_date_rating">
            <span className="movie_date">{date || "Unknown"}</span>
            <span className="movie_rating">⭐ {rating || 0}</span>
          </div>
          <p className="movie_description">
            {description ? (description.length > 100 ? description.slice(0, 100) + "..." : description) : "No description available."}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
