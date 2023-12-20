import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import google from "./assets/google.svg";
import microsoft from "./assets/microsoft.svg";
import spotify from "./assets/spotify.svg";
import amazon from "./assets/amazon.svg";

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
          <img src={google} alt="Google" />
          <img src={microsoft} alt="Microsoft" />
          <img src={spotify} alt="Spotify" />
          <img src={amazon} alt="Amazon" />
        </div>
        <Link to="/signup">
          <button>Get started (it's free)</button>
        </Link>
      </main>
    </div>
  );
};

export default Main;
