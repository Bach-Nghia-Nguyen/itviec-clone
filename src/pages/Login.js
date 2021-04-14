import React from "react";

import LoginForm from "../components/LoginForm";

const Login = ({ user, login, logout, error }) => {
  return (
    <div className="login-container">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )}
    </div>
  );
};

export default Login;
