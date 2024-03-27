import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", {
        email,
        password,
      })
      .then((result) => {
        if (result.data === "success") {
          console.log(result);
          alert("Login successful! You will now be redirected.");
          navigate("/");
        } else {
          alert(
            "Invalid email or password. Please check your credentials and try again."
          );
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please check your email or password.");
      });
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-from" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*******"
          id="password"
          name="password"
        />

        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>

      <button className="link-btn" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};
