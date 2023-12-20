import React, { useContext } from "react";
import "./Navbar.css";
import { AuthContext } from "../provider/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, signout } = useContext(AuthContext);
  const handleLogout = async () => {
    await signout();
  };
  return (
    <header>
      <input type="text" placeholder="Search 8,000+ tutorials" />
      <Link style={{ color: "white" }} to="/">
        <div className="logo">freeCodeCamp</div>
      </Link>
      <nav>
        <a href="#">Menu</a>
        {user ? (
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        ) : (
          <Link to="/login">
            <a href="#">LogIn</a>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
