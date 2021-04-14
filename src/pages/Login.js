import React, { useState } from "react";
import { Link, Route, Redirect } from "react-router-dom";

import LoginForm from "../components/LoginForm";

import JobsList from "../pages/JobsList";

const Login = () => {
  const admin = {
    name: "Nghia",
    email: "nghia@gmail.com",
    password: "061296",
  };

  const [user, setUser] = useState({ email: "", name: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.email === admin.email && details.password == admin.password) {
      console.log("Log in successfully");

      setUser({
        name: admin.name,
        email: admin.email,
      });
      setError("");
    } else {
      setError("Wrong username or password!");
    }
  };

  const Logout = () => {
    console.log("Log out");
    setUser({ name: "", email: "" });
  };

  return (
    <div className="login-container">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Log Out</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default Login;
