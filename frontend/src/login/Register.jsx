import { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/register", {
        name,
        email,
        password,
      })
      .then((result) => console.log(result));
    navigate("/log").catch((err) => console.log(err));
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-from" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          placeholder="Enter your full name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="email">Email address: </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label HtmlFor="password">Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*******"
          id="password"
          name="password"
        />
        <Link to="/log">
          <button onClick={() => props.onFormSwitch("login")}>Log in</button>
        </Link>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
