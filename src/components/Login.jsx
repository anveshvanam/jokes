import React, { useState } from "react";

const Login = (props) => {
  const { setIsLoggedIn } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "anvesh" && password === "anvesh123") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h2>Login</h2>
      {error && <div className="alert alert-danger my-3">{error}</div>}
      <form
        onSubmit={handleSubmit}
        className="w-100 mt-4 shadow-lg h-100 bg-white rounded-xl p-5 shadow-lg"
        style={{ maxWidth: "500px" }}
      >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
