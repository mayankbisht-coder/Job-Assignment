import React, { useContext, useState } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthContext";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    await signup(name, email, password, setError);
  }

  return (
    <div>
      <div className="Signup">
        <div className="signup-box">
          <h2 className="heading">Signup</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input type="submit" className="submit" />
          </form>
          <p className="subheading">
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
          <br />
          <p style={{ color: "red" }}>{error}</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
