import React, { useState } from "react";

const LoginForm = ({ login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Log in</h2>

        {error ? <div className="error-message">{error}</div> : ""}

        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="tex"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <input type="submit" value="LOG IN" />
      </div>
    </form>
  );
};

export default LoginForm;
