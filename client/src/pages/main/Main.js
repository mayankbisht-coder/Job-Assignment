import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="container">
      <main>
        <h1>Learn to code — for free.</h1>
        <h2>Build projects.</h2>
        <h2>Earn certifications.</h2>
        <p>
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </p>
        <div className="companies">
          <img src="google.png" alt="Google" />
          <img src="microsoft.png" alt="Microsoft" />
          <img src="spotify.png" alt="Spotify" />
          <img src="amazon.png" alt="Amazon" />
        </div>
        <Link to="/signup">
          <button>Get started (it's free)</button>
        </Link>
      </main>
    </div>
  );
};

export default Main;
