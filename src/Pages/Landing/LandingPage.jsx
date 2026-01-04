import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import dummy from "../../assets/Images/dummy.jpg";

const LandingPage = () => {
  return (
    <section className="landing">
      <img
        src={dummy}
        alt="Relaxing cruise scene"
        className="landing_bg"
      />

      <div className="landing_overlay">
        <div className="landing_content">
          <h1>Welcome to Cruise Movie</h1>
          <p>Sit back, relax, and discover movies worth cruising through.</p>

          <Link to="/Movie" className="landing_btn">
            Explore Cruise Movie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
